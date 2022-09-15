const express = require("express")
const router = express.Router()


//RENDER
router.get('/', (req, res) => {
    res.render("login")
})


//Redirect
router.post('/clipping', (req, res) => {
    res.redirect('sistema/clipping')
 })






module.exports = router