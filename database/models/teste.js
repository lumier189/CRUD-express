module.exports = (sequelize, Datatypes) => {
    
    const Teste = sequelize.define("Teste",{
        categoria:{
            type: Datatypes.STRING
        },

       // timestamps: false
        createdAt: {
            type: DataTypes.DATE
            },
             modifiedAt: {
            type: DataTypes.DATE
            },
            
    });
    
    return Teste;

}