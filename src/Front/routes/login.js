const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render("login")
})

router.post('/clipping', (req, res) => {
    res.redirect('sistema/clipping')
})






module.exports = router