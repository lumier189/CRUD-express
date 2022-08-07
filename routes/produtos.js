const express = require("express");
const router = express.Router();
const Produto = require("../models/produto");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))



//listar page
router.get("/listadeprodutos", async (req,res) => 
{
    const arrayProdutos = await Produto.findAll();
 // await arrayProdutos.destroy();
    return res.render("produtos/listadeprodutos",{produtos:arrayProdutos})
});



module.exports = listarProdutos;