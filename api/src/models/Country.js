const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Countries', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    continent:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    subregion:{
      type:DataTypes.STRING,
    },
    area:{
      type:DataTypes.FLOAT,
    },
    population:{
      type:DataTypes.INTEGER,
    },
    map:{
      type:DataTypes.STRING
    }
  }, {
    timestamps: false
  });
};


// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población