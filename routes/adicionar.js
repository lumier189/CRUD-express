const express = require("express");
const router = express.Router();
const Produto = require("../models/produto");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))


router.get("/adicionarproduto", (req,res)=>
{
  return res.render("./adicionarproduto/adicionarproduto");
});



router.post("/adicionarproduto", async (req,res)=>
{
  const novoProduto =  req.body;

  await Produto.create(novoProduto);
  return  res.redirect("/produtos/listadeprodutos")
});


module.exports = adicionarRouter