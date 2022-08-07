const express = require("express");
const router = express.Router();
const Produto = require("../models/produto");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))


router.get("/deletarprodutos", (req,res)=>{
    return res.render("./deletarprodutos/deletarproduto")
  });
  
  
  
  router.delete("/deletarprodutos",async(req,res)=>{
    const tenta = req.body
    const id = tenta.id
  
      await Produto.destroy({ where:{id}  });
    return res.redirect("/produtos/listadeprodutos")
    //return  res.redirect("/produtos/listadeprodutos")
  });

  
  module.exports = deletarRouter;