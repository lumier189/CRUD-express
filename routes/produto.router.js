const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))
const produtoCrontroller = require("../controllers/produto.controller.js")


// Páginas index dos produtos
router.get("/", produtoCrontroller.index)


//Lista de produtos
router.get("/listar", produtoCrontroller.listar)


//adicionar novo produto
router.get("/adicionar", produtoCrontroller.adicionar)
router.post("/adicionar", produtoCrontroller.adicionarPost)


//deletar produto por id
router.delete("/deletar/:id",produtoCrontroller.deletarDelete)


//editr produto por id 
router.get("/editar/:id", produtoCrontroller.editar)
router.post("/editar/:id", produtoCrontroller.editarPost)
 

//exportar controller 
module.exports = router;
