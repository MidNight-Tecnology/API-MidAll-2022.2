// bibliotecas
const pup = require('puppeteer');  //npm i puppeteer
const cheerio = require('cheerio'); //npm i cheerio
const db = require('./models/db');
const Links_de_pdf = require('./models/link_de_pdf');
const Links_de_pdf_filtrado = require('./models/link_de_pdf_filtrado');

console.log('<<  Juninho ON! 🤖 >> ')
//Testa Conexão com o db
db.sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!")
}).catch(function (erro) {
    console.log("Erro ao conectar: " + erro)
});

const url = [[]];
const banco = Links_de_pdf.findAll().then(function (Link) {
    Link.forEach(element => {
        url.push([element[0], element[1], element[2]])
    });

})

let list = [];
let c = 1;
let tramontina = [];

// função assincrona 
url.forEach(element => {
    (async () => {
        const browser = await pup.launch({ headless: true });// chromium true pra nao mostrar abrindo
        const page = await browser.newPage();
        console.log('iniciei!');
        await page.goto(element[1]);
        console.log('fui pra URL!');

        await page.waitForSelector('.joyride-content-wrapper');
        await page.click('.joyride-content-wrapper > a', '.joyride-content-wrapper > a'); //


        await page.click('#content_dtgResultado_lblData_0');

        // const links = await page.$$eval('.card-header > a', el => el.map(link => link.href));
        const links = await (await page.$$eval('.card-body > .card-text> a', el => el.map(link => link.href))); //pega todos os links dos cards
        links.shift(); // apaga o primeiro indice da lista

        //console.log(typeof(links))

        const obj = {};

        for (const link of links) {
            if (c === 15) continue; //limitador de paginas

            console.log('Pagina', c); //contador de paginas
            obj.link = link;

            list.push(obj.link); //joga os links do objeto dentro da lista

            cort = obj.link.split('aspx'); //corta o link ate a palavra aspx do link

            console.log(cort[1], '\n'); // cortador pega a partir do 1 indice.
            const banco2 = Links_de_pdf_filtrado.create({
                id: element[0],
                link: cort[1],
                id_assoc: element[2]
            })

            c++;
        };


        await page.waitForTimeout(3000);

        await browser.close();
    })();

});