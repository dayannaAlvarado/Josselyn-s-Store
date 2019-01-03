module.exports=function(sequelize
, Sequelize){
    
    var Envio=sequelize.define('envio',{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER,
        allowNull:false
    },
    ciudad:{
        type: Sequelize.STRING(50),
        allowNull:false
    },
    sector:{
        type: Sequelize.STRING(50),
        allowNull:false
    },
    callePrincipal:{
        type: Sequelize.STRING(50),
        allowNull:false
    },
    calleSecundaria:{
        type: Sequelize.STRING(50),
        allowNull:false
    },
    numCasa:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    referencia:{
        type: Sequelize.STRING(50),
        allowNull:false
    },
    
        codigoPostal:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    correo:{
      type: Sequelize.STRING(50),
      allowNull:true  
    },
    telefono:{
      type: Sequelize.STRING(50),
      allowNull:true 
    }
    
    //para que no ponga s al final
},  {timestamps:false,
    freezeTableName:true});
//agregar foreign key, la tabla VENTA la contiene
Envio.associate=function(models){
    models.envio.hasMany(models.venta,{
        foreignKey: 'id_envio'
    } );
};
return Envio;
};
