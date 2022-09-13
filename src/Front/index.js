const express = require("express");
const app = express();


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/templates/login.html")
})

//Faz o app rodar
app.listen(8081, function () {
    console.log('Server Rodando na porta 8081')
});