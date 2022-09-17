// bibliotecas
const pup = require('puppeteer');  //npm i cheerio puppeteer
const cheerio = require('cheerio');
const readlineSync = require('readline-sync');// npm install readline-sync


console.log ('<<  Juninho ON! >> 🤖')
const url = "https://www.imprensaoficial.com.br/DO/BuscaDO2001Resultado_11_3.aspx?filtropalavraschave=+Rodrigo+garcia+&f=xhitlist&xhitlist_vpc=first&xhitlist_x=Advanced&xhitlist_q=%5bfield+%27dc%3adatapubl%27%3a%3E%3d15.09.2022<%3d15.09.2022%5d(Rodrigo2%bgarcia)&filtrogrupos=Cidade+de+SP%2c+Executivo+&xhitlist_mh=9999&filtrodatafimsalvar=20220915&filtroperiodo=15%2f09%2f2022+a+15%2f09%2f2022&filtrodatainiciosalvar=20220915&filtrogrupossalvar=Cidade+de+SP%2c+Executivo+&xhitlist_hc=%5bXML%5d%5bKwic%2c3%5d&xhitlist_vps=15&filtrotodosgrupos=False&xhitlist_d=Cidade+de+SP%2c+Executivo+&filtrotipopalavraschavesalvar=UP&xhitlist_s=&xhitlist_sel=title%3bField%3adc%3atamanho%3bField%3adc%3adatapubl%3bField%3adc%3acaderno%3bitem-bookmark%3bhit-context&xhitlist_xsl=xhitlist.xsl";


let c = 1;


(async () => {
    const browser = await pup.launch({headless: false});
    const page = await browser.newPage();
    console.log('iniciei!');

    await page.goto(url);
    console.log('fui pra URL!');

    await page.waitForSelector('.joyride-content-wrapper');
    await page.click('.joyride-content-wrapper > a', '.joyride-content-wrapper > a');
    

    await page.click('#content_dtgResultado_lblData_0');

    const links = await page.$$eval('.card-header > a', el => el.map(link => link.href));
    // console.log (links)

    //for mostrando a pagina com a variavel contando e esperando pra selecionar o link indo pra proxima com o goto
    for(const link of links){
        if (c === 15) continue;
        console.log('Pagina', c);
        await page.goto(link);
        // await page.waitForSelector('.card-header > .card-title.h5');

        // //classe de titulo pra esperar o titulo carregar e mostrar ele na tela *pego pela classe no site do ml
        // const title = await page.$eval('.card-header > card-title.h5', element => element.innerText);

        // //mostra o preço do elemento na tela *pego pela classe no site do ml
        // const descricao = await page.$eval('.card-body > a', element => element.innerText);

        //pegar o elemento do vendedor e se nao tiver o valor retorna nulo
        // const seller = await page.evaluate( ()=>{
        //     const el = document.querySelector('.ui-pdp-seller__link-trigger');
        //     if(!el) return null
        //     return el.innerText;

        // })

        // const obj = {};
        // obj.title = title;
        // obj.descricao = descricao;
        // // // se seller nao é nulo (?) e se tiver algum valor vai ser =  seller, senao retorna vazio
        // // // (seller ? obj.seller = seller : '');
        // obj.link=link;
        // list.push(obj);

        //contador aumenta 1 no final do for
        c++;
    }
    console.log(list);

    await page.waitForTimeout(3000);

    //await browser.close();
})();