const http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const upload = require("multer")();

app.use(require("cors")());
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

app.post('/send', upload.single('anexo'), (req, res, next) => { 
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;
    require("./nodemail")(email, nome, mensagem)
        .then(response => res.json(response))
        .catch(error => res.json(error));
}) 

const server = http.createServer(app); 
server.listen(3030);
console.log("Servidor escutando na porta 3030...")