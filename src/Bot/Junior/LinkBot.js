// bibliotecas
const {PdfModel} = require ('../../Back/src/database/models/pdfModel')

const pup = require('puppeteer');  //npm i puppeteer
const cheerio = require('cheerio'); //npm i cheerio
const readlineSync = require('readline-sync'); // npm install readline-sync
const { link } = require('fs');
const axios = require('axios');
const crud = axios.create({
    baseURL: "http://localhost:4512",
  });



// const searchFor = readlineSync.question('informe o link desejado: ')
// const searchNome = readlineSync.question('informe o Nome desejado: ')


console.log('<<  Juninho ON! 🤖 >> ')


// const url = searchFor;
// const nomes = searchNome;

const url = [];
const nomes = [];
crud.get('/getpdf')
.then(function (response) {
    // console.log(typeof response)
    const obj = response.data
    obj.map((item, key) =>{
        // console.log(item.id);
        // console.log(item.link_pdf);
        // console.log(item.nome_assoc);
        url.push(item.link_pdf)
        nomes.push(item.nome_assoc)

    })
    })
        




var conta_nome = 0;

let list = [];
let c = 1;
let tramontina = [];

// função assincrona 
(async () => {
    const browser = await pup.launch({ headless: false });// chromium true pra nao mostrar abrindo
    const page = await browser.newPage();
    console.log('iniciei!');
    for (i = 0; i < url.length; i++) {
        await page.goto(url[3]);
        // if associado (i) tem link pega o link do amigo
        // else pula pro amigo do lado
        console.log('fui pra URL!');



        await page.waitForSelector('.joyride-content-wrapper');
        const box = await page.click('.joyride-content-wrapper > a', '.joyride-content-wrapper > a'); //

    

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
