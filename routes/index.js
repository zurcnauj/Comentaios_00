const express = require("express")
const router = express.Router()
const controladores = require("../controller/controller-index")

router.get("/",controladores.con_comentarios)

router.post("/registra",controladores.con_agregar)

module.exports = router