const express = require("express")
const { where } = require("sequelize")
const router = express.Router()


//Imports
const Users = require('../models/Users')
const Associado = require('../models/Associado')


//Renders -- Sem nada
router.get('/clipping', (req, res) => {
    res.render('clipping')
})
router.get('/alterar_emails', (req, res) => {
    res.render('alterar_emails')
})
router.get('/cadastro_assoc', (req, res) => {
    res.render('cadastro_assoc')

})



//Redirects -- FOCO, FORÇA E FÉ  -- Sem nada
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

router.post('/cadastrar_assoc', (req, res) => {
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var comp = req.body.comp;
    var nasc = req.body.nasc;
    var cep = req.body.cep;
    var tel = req.body.tel;
    var cpf = req.body.cpf;
    var rg = req.body.rg;
    var estado_civil = req.body.estado_cv;
    var inst_ensino = req.body.inst_ens;
    var email = req.body.email;
    Associado.create({
        nome: nome,
        endereco: endereco,
        comp: comp,
        nasc: nasc,
        cep: cep,
        tel: tel,
        cpf: cpf,
        rg: rg,
        estado_cv: estado_civil,
        inst_ens: inst_ensino,
        email: email,
    }).then(function (result) {
        console.log('Cadastrado')
        res.redirect('gerenc_assoc')
    });
})

router.get('/gerenc_assoc', (req, res) => {
    const banco = Associado.findAll().then(function(Assoc) {
        res.render('gerenc_assoc', { Assoc: Assoc })
    })

})


module.exports = router