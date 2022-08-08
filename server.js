const express = require("express")
app = express();
const expressLayouts = require("express-ejs-layouts")
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const produtoRouter = require("./routes/produto.router");



//configurações
app.set("view engine", "ejs");
app.set("views",__dirname + "/views");
app.set("layout","layouts/layout");
app.use(expressLayouts);
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))


//rotas
app.use("/produtos",produtoRouter); 

//server up
app.listen(process.env.PORT || 3340)
console.log("server up")



