const express = require("express");
const router = express.Router();
const Produto = require("../../models/Produto");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))


// Páginas de produtos
router.get("/", (req,res)=>
{
  return  res.render("./produto/index");
});




//Lista de produtos
router.get("/listar", async (req,res) => 
{
    const arrayProdutos = await Produto.findAll();

    return res.render("./produto/listar/listar",{produtos:arrayProdutos})
});




//adicionar novo produto
router.get("/adicionar", (req,res)=>
{
  return res.render("./produto/adicionar/adicionar");
});


router.post("/adicionar", async (req,res)=>
{
  const novoProduto =  req.body;
 
  await Produto.create(novoProduto);
  return  res.redirect("/produtos/listar")
});




//deletar produto por id
router.delete("/deletar/:id",async(req,res)=>
{
  const id = req.params.id
   
  await Produto.destroy({ where:{id}  });
  return res.redirect("/produtos/listar")
  
});


router.get("/editar/:id", async(req,res)=>{

      const id =  req.params.id; 
      const produto = await Produto.findByPk(id);
  return  res.render("./produto/editar/editar", {name:produto.name,preco:produto.preco})
  
});




//editar produto
router.post("/editar/:id",async(req,res)=>{

  Produto.update(
  {
    name:  req.body.name,
    preco: req.body.preco
  },
  {
    where: 
    {
      id: req.params.id
    }
    })

    return res.redirect("/produtos/listar")
});


//exportar controller 
module.exports = router;