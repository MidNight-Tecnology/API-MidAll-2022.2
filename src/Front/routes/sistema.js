const express = require("express")
const router = express.Router()


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






module.exports = router