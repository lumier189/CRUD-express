const express = require("express");
const router = express.Router();
const Produto = require("../models/produto");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))


//main page
router.get("/", (req,res)=>
{
  return  res.render("index");
});



//listar page
router.get("/listadeprodutos", async (req,res) => 
{
    const arrayProdutos = await Produto.findAll();
 // await arrayProdutos.destroy();
    return res.render("produtos/listadeprodutos",{produtos:arrayProdutos})
});



//adicionar page
router.get("/adicionarproduto", (req,res)=>
{
  return res.render("./adicionarproduto/adicionarproduto");
});



router.post("/adicionarproduto", async (req,res)=>
{
  const novoProduto =  req.body;
  //console.log(novoProduto)
  await Produto.create(novoProduto);
  return  res.redirect("/listadeprodutos")
});

// router.post("/adicionarproduto", async (req,res)=>{
//     const novoProduto = new Produto ({
//         id: req.body.id,
//         name: req.body.name,
//         preco: req.body.preco
//     })
//     console.log(novoProduto)
//       await Produto.create(novoProduto);
//       return  res.redirect("/produtos/listadeprodutos")
//     })




// deletar page
router.get("/deletarprodutos", (req,res)=>{
  return res.render("./deletarprodutos/deletarproduto")
});



router.delete("/deletarprodutos/:id",async(req,res)=>
{
  
  const id = req.params.id
  
  
  await Produto.destroy({ where:{id}  });
  return res.redirect("/listadeprodutos")
  
});


router.get("/editarprodutos/:id", async(req,res)=>{
      const id =  req.params.id; 
      const produto = await Produto.findByPk(id);
  return  res.render("./editarprodutos/editarproduto", {name:produto.name,preco:produto.preco})
  
})



router.get("/produto/:id", async(req,res)=>{
  const id =  req.params.id; 
  const produto = await Produto.findByPk(id);

return  res.send(produto);

})

// editar page
router.post("/editarprodutos/:id",async(req,res)=>{

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

    return res.redirect("/listadeprodutos")
});











module.exports = router;