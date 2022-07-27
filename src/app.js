//--------IMPORTACIONES
const express = require("express");
require('dotenv').config()
const userRouter = require('./todo/todo.router').router

//--------EJECUTAMOS EXPRESS
const app = express()


//-------HABILITAMOS EL USO DE JSON
app.use(express.json())


//--------ESTO ES UNA PRUEBA
app.use("/hola", (req,res)=>{
    res.json({message:'Peticion con use', method: req.method})
})


//--------AQUI DEFINIMOS LAS RUTAS
app.use('/api/v1', userRouter)
//* localhost:8000/api/v1/tasks


//---------DEFINIMOS EL PUERTO
app.listen(8000, () => {
    console.log("Server started at port 8000")
})