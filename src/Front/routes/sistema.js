const express = require("express")
const router = express.Router()

router.get('/clipping', (req, res) => {
    res.render('clipping')
})







module.exports = router