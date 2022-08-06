const express = require("express")
app = express();
const expressLayouts = require("express-ejs-layouts")


const indexRouter = require("./routes/index");

const bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.set("views",__dirname + "/views");
app.set("layout","layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))


app.post("/todososprodutos", (req,res) => {
    console.log(req.body)
})

app.use("/",indexRouter)
app.use("/todosprodutos", indexRouter)
app.use("/produtos", indexRouter)





app.listen(process.env.PORT || 3340)
console.log("server up")



