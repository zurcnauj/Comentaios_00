
const coleccion = []

coleccion.push({
	nombre: "nombre01",
	texto: "texto01"
})
coleccion.push({
	nombre: "nombre02",
	texto: "texto02"
})
const con_comentarios = (req,res)=>{
	res.render("index",{objeto:coleccion})
}

const con_agregar = (req, res)=>{
	var nuevo = { 
		nombre: req.body.nombre,
		texto: req.body.texto
	}
	coleccion.push(nuevo)
	res.redirect("/")
}
module.exports = {
	con_comentarios : con_comentarios,
	con_agregar: con_agregar

}