const express = require("express")
app = express();
const expressLayouts = require("express-ejs-layouts")
const methodOverride = require("method-override");
const inputValidator = require("node-input-validator");


const indexRouter = require("./routes/index");




const bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.set("views",__dirname + "/views");
app.set("layout","layouts/layout");
app.use(expressLayouts);
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))



app.post("/deletarprodutos", (req,res) => {
   console.log(req.body)
})

app.use("/",indexRouter); // index page
// app.use("/adicionarprodutos", indexRouter);  // adicionar produtos
// app.use("/produtos", indexRouter); // listar produtos 
// app.use("/deletarprodutos", indexRouter); // deletar produtos
// app.use("/editarprodutos", indexRouter); //Editar produtos



app.listen(process.env.PORT || 3340)
console.log("server up")



