const Sequelize = require("sequelize");
const sequelize = new Sequelize("sylas", "root","123456",{
    host:"localhost",
    dialect: "mysql"
});


    sequelize.authenticate()
    .then(function(){
        console.log("sucessful");
    }).catch(function(error){
        console.log("erro ai meu" + error)
    })

    
  
module.exports = sequelize;