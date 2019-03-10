const express = require("express")
const app = express()
const routes = require("./routes/index")
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 8000

app.set("view engine","jade")

app.use(routes)

app.listen(PORT,()=>{console.log("Inicia puerto "+PORT)})