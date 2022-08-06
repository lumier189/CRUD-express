const express = require("express");
const router = express.Router();
const Produto = require("../models/produto");


router.get("/", (req,res)=>{
    res.render("index")
})

router.get("/todososprodutos", (req,res)=>{
    res.render("./todososprodutos/todososprodutos")
})

router.post("/todososprodutos/produtos", (req,res)=>{
    res.send("create")
})

router.get("/produtos", async (req,res) => {
  const arrayProdutos = await Produto.findAll();
  console.log(arrayProdutos)
    return res.render("produtos/produtos", {produtos:arrayProdutos})
});




module.exports = router;