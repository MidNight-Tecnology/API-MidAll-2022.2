// bibliotecas
const pup = require("puppeteer"); //npm i puppeteer
const cheerio = require("cheerio"); //npm i cheerio
const readlineSync = require("readline-sync"); // npm install readline-sync
const { link } = require("fs");
const axios = require("axios");
const { BOOLEAN } = require("sequelize");
const crud = axios.create({
  baseURL: "http://localhost:4512",
});

// const searchFor = readlineSync.question('informe o link desejado: ')
// const searchNome = readlineSync.question('informe o Nome desejado: ')

console.log("<<  Juninho ON! 🤖 >> ");

// const url = searchFor;
// const nomes = searchNome;

const url = [];
const nomes = [];
crud.get("/getpdf").then(function (response) {
  // console.log(typeof response)
  const obj = response.data;
  obj.map((item, key) => {
    // console.log(item.id);
    // console.log(item.link_pdf);
    // console.log(item.nome_assoc);
    url.push(item.link_pdf);
    nomes.push(item.nome_assoc);
  });
});

var conta_nome = 0;

let list = [];
let c = 1;
let tramontina = [];

// função assincrona
(async () => {
  const browser = await pup.launch({ headless: false }); // chromium true pra nao mostrar abrindo
  const page = await browser.newPage();
  console.log("iniciei!");
  for (i = 0; i < url.length; i++) {
    await page.goto(url[i]);
    await page.waitForTimeout(500);
    console.log("fui pra URL!");

    const urlzinha = page.url();
    if (!urlzinha.includes("ResultadoNegativo")) {
      console.log("Parte que pega os links de cada box");
      // console.log(urlzinha)

      

      

          const links = await page.$$eval(".card-body > .card-text> a", (el) => el.map((link) => link.href)); //pega todos os links dos cards
          links.shift(); // apaga o primeiro indice da lista

      

        const obj = {};

            for (const link of links) {

              console.log("Pagina", c); //contador de paginas
              obj.link = link;

              list.push(obj.link); //joga os links do objeto dentro da lista

              cort = obj.link.split("aspx"); //corta o link ate a palavra aspx do link

              console.log(cort[1], "\n"); // cortador pega a partir do 1 indice.

              if (cort[1].includes("executivo+secao+i")) {
            
                

                obj.pagina = cort[1].split("fpag_")[1].split("_")[0];
                // obj.data = cort[1].split("data=")[1].split("&caderno")[0];
                obj.caderno = 'exec1'
                
                obj.dia = cort[1].split("data=")[1].split("&caderno")[0].split("/")[0];
                obj.mes = cort[1].split("data=")[1].split("&caderno")[0].split("/")[1];
                obj.ano = cort[1].split("data=")[1].split("&caderno")[0].split("/")[2];
                

              } else if (cort[1].includes("executivo+secao+ii")) {
          
                obj.pagina = cort[1].split("fpag_")[1].split("_")[0];
                // obj.data = cort[1].split("data=")[1].split("&caderno")[0];
                obj.caderno = 'exec2'
                obj.dia = cort[1].split("data=")[1].split("&caderno")[0].split("/")[0];
                obj.mes = cort[1].split("data=")[1].split("&caderno")[0].split("/")[1];
                obj.ano = cort[1].split("data=")[1].split("&caderno")[0].split("/")[2];
                

              } else {
            
                obj.pagina = cort[1].split("fpag_")[1].split("_")[0];
                // obj.data = cort[1].split("data=")[1].split("&caderno")[0];
                obj.caderno = 'cidade'
                obj.dia = cort[1].split("data=")[1].split("&caderno")[0].split("/")[0];
                obj.mes = cort[1].split("data=")[1].split("&caderno")[0].split("/")[1];
                obj.ano = cort[1].split("data=")[1].split("&caderno")[0].split("/")[2];
              
              }
              const dia = obj.dia
              const mes = obj.mes
              const ano = obj.ano
              const caderno = obj.caderno
              const pagina = obj.pagina
              c++;


            crud.post("/createfilterlink", {
              nome_assoc: nomes[i],
              link_pdf: cort[1],
              dia: dia,
              mes: mes,
              ano: ano,
              caderno: caderno,
              pagina: pagina,
              
            }).then(resp =>{
              console.log(resp);
          })
          .catch(error =>{
              console.log(error);
          })
            console.log("Pegou link do(a) associado(a) número "+i+ nomes[i]+".");
            await page.waitForTimeout(500);
          }
        
    } else {
        console.log("O(a) associado(a) de número "+i+ nomes[i]+" não tem pdfs no dia");
      }
  }
  await browser.close();
})();


 

