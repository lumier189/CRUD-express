const express = require("express");
const router = express.Router();
const Produto = require("../models/produto");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))



router.get("/", (req,res)=>{
    res.render("index")
})

router.get("/adicionarproduto", (req,res)=>{
    res.render("./todososprodutos/adicionarproduto")
})

router.post("/adicionarproduto", async (req,res)=>{
const novoProduto =  req.body;
console.log(novoProduto)
const resultadoCreate = await Produto.create(novoProduto);
  return  res.redirect("/produtos/listadeprodutos")
})


// router.post("/adicionarproduto", async (req,res)=>{
//     const novoProduto = new Produto ({
//         id: req.body.id,
//         name: req.body.name,
//         preco: req.body.preco
//     })
//     console.log(novoProduto)
//     const resultadoCreate = await Produto.create(novoProduto);
//       return  res.redirect("/produtos/listadeprodutos")
//     })


router.get("/listadeprodutos", async (req,res) => {
  const arrayProdutos = await Produto.findAll();
 // await arrayProdutos.destroy();
 
      return res.render("produtos/listadeprodutos", {produtos:arrayProdutos})
});

router.get("editarproduto"), async (req,res) => {
  

  return res
}

router.get("/deletarprodutos", (req,res)=>{
  return res.render("./deletarprodutos/deletarproduto")
});

router.delete("/deletarprodutos",async(req,res)=>{
  const tenta = req.body
  const id = tenta.id

    await Produto.destroy({ where:{id}  });
  return res.redirect("./produtos/listadeprodutos")
});



module.exports = router;