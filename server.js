const express = require("express")
app = express();
const expressLayouts = require("express-ejs-layouts")
const methodOverride = require("method-override");


const indexRouter = require("./routes/produtos/index");


const bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.set("views",__dirname + "/views");
app.set("layout","layouts/layout");
app.use(expressLayouts);
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))



app.use("/produtos",indexRouter); 


app.listen(process.env.PORT || 3340)
console.log("server up")



