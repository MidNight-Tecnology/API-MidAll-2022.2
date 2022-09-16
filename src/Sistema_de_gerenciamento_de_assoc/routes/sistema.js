const express = require("express")
const { where } = require("sequelize")
const router = express.Router()


//Imports
const Users = require('../models/Users')


//Renders -- AMEM DEU CERTO
router.get('/clipping', (req, res) => {
    res.render('clipping')
})
router.get('/alterar_emails', (req, res) => {
    res.render('alterar_emails')
})
router.get('/cadastro_assoc', (req, res) => {
    res.render('cadastro_assoc')
})
router.get('/gerenc_assoc', (req, res) => {
    res.render('gerenc_assoc')
})


//Redirects -- FOCO, FORÇA E FÉ
router.post('/cadastrar_assoc', (req, res) => {
    res.redirect('gerenc_assoc')
})
router.post('/gerenc_associ', (req, res) => {
    res.redirect('cadastro_assoc') //trocar para cadastro_assoc_alt
})
router.post('/alt_email', (req, res) => {
    res.redirect('alterar_emails')
})
router.post('/altera_email', (req, res) => {
    res.redirect('gerenc_assoc')
})


//CRUD
router.post('/logar', (req, res) => {
    var email = req.body.email;
    var senha = req.body.senha;
    const banco = Users.findOne({
        where: {
            email: email,
            senha: senha
        }
    }).then(function (result) {
        if (result) {
            res.redirect('clipping')
        } else {
            res.redirect('../')
        }
    })
})


module.exports = router