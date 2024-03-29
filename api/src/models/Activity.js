const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Activities', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
    },
    name:{
        type:DataTypes.STRING
    },
    difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5')
    },
    duration: {
        type: DataTypes.STRING,
    },
    season: {
        type: DataTypes.ENUM('Summer','Autumn','Winter','Spring'),
    },
  }, {
    timestamps: false
  });
};


// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)