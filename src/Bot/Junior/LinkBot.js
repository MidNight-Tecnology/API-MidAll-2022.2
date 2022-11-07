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
  const browser = await pup.launch({ headless: true }); // chromium true pra nao mostrar abrindo
  const page = await browser.newPage();
  console.log("iniciei!");
  for (i = 0; i < url.length; i++) {
    await page.goto(url[i]);
    // if associado (i) tem link pega o link do amigo
    // else pula pro amigo do lado
    await page.waitForTimeout(500);
    console.log("fui pra URL!");

    const urlzinha = page.url();
    if (!urlzinha.includes("ResultadoNegativo")) {
      console.log("Parte que pega os links de cada box");
      console.log(urlzinha)
      
      
      // const esperar = await page.waitForSelector(".joyride-content-wrapper");
      // const fechar = await page.click(".joyride-content-wrapper > a");

      
      // if se budeguinha/esperar aparecer fechar a budeguinha/esperar e roda o programa,
      // else a budeguinha/esperar não aparecer roda o programa

      
          

          // await page.click("#content_dtgResultado_lblData_0");

          const links = await page.$$eval(".card-body > .card-text> a", (el) => el.map((link) => link.href)); //pega todos os links dos cards
          links.shift(); // apaga o primeiro indice da lista

      //console.log(typeof(links))

        const obj = {};

            for (const link of links) {
              // if (fechar==false || esperar == false) continue;
              

               //limitador de paginas pega as 15 boxes das paginas

              console.log("Pagina", c); //contador de paginas
              obj.link = link;

              list.push(obj.link); //joga os links do objeto dentro da lista

              cort = obj.link.split("aspx"); //corta o link ate a palavra aspx do link

              console.log(cort[1], "\n"); // cortador pega a partir do 1 indice.

              c++;
            crud.post("/createfilterlink", {
              nome_assoc: nomes[i],
              link_pdf: cort[1],
            }).then(resp =>{
              console.log(resp);
          })
          .catch(error =>{
              console.log(error);
          })
            console.log("Pegou link de associade número "+i+nomes[i]+".");
            await page.waitForTimeout(500);
          }
        
    } else {
        console.log("O associade de número "+i+nomes[i]+" não tem pdfs no dia");
      }
  }
  await browser.close();
})();

// Agora é commitar