const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const path = require('path')

//Config
//Template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//Body Parser
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
// Arquivos Estaticos
app.use(express.static(path.join(__dirname, "public")))
//Imports de arquivos
const db = require('./models/db')
const principal = require('./routes/login')
const sistema = require('./routes/sistema')

//Rotas
app.use(principal)
app.use('/sistema', sistema)


//Faz o app rodar
app.listen(8081, function () {
    console.log('Server Rodando na porta 8081')
});

//Testa Conexão com o db
db.sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!")
}).catch(function (erro) {
    console.log("Erro ao conectar: " + erro)
});