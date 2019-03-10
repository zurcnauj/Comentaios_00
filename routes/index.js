const express = require("express")
const router = express.Router()
const controladores = require("../controller/controller-index")
const bodyParser = require('body-parser');

router.get("/",controladores.con_comentarios)

router.post("/registra",controladores.con_agregar)

module.exports = router