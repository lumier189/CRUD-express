const  sequelize = require("./db");

const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const Produto = sequelize.define('Produto', {
    name: {
      type: DataTypes.STRING,

    },
    preco:{
        type: DataTypes.FLOAT
    },
  }, {
    timestamps:false,
  } );

module.exports = Produto;
  