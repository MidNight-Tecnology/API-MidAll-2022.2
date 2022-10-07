// bibliotecas
const pup = require('puppeteer');  //npm i puppeteer
const cheerio = require('cheerio'); //npm i cheerio
const readlineSync = require('readline-sync'); // npm install readline-sync

const db = require('./db');
const PdfModel = require('../../Back/dist/database/models/pdfModel');
const { link } = require('fs');


// const searchFor = readlineSync.question('informe o link desejado: ')
// const searchNome = readlineSync.question('informe o Nome desejado: ')


console.log('<<  Juninho ON! 🤖 >> ')
//Testa Conexão com o db
db.sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!")
}).catch(function (erro) {
    console.log("Erro ao conectar: " + erro)
});

// const url = searchFor;
// const nomes = searchNome;

const url = [];
const nomes = [];

const banco = PdfModel.findAll().then(function (response) {
    Object.keys(response).forEach(function (item) {
        // console.log(response[item].id + '\n\n\n' + response[item].link + '\n\n\n' + response[item].assoc_nome + '\n\n\n');
        url.push(response[item].link_pdf)
        nomes.push(response[item].nome_assoc)
    })
})





var conta_nome = 0;

let list = [];
let c = 1;
let tramontina = [];

// função assincrona 
(async () => {
    const browser = await pup.launch({ headless: true });// chromium true pra nao mostrar abrindo
    const page = await browser.newPage();
    console.log('iniciei!');
    for (i = 0; i < url.length; i++) {
        await page.goto(url[i]);
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
            const banco2 = PdfModel.update({
                link_pdf_filtrado: cort[1],
                where: 
                {
                    nome_assoc: nomes[i]}});

            c++;
        };

        console.log('To no: ' + nome[i])
        await page.waitForTimeout(3000);
        console.log('Indo no: ' + nome[i+1])
    }
    await browser.close();
})();
