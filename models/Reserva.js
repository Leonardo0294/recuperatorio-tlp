const { sequelize, DataTypes } = require("../database");

const Reserva = sequelize.define(
  "reserva",
  {
    // Definición de las propiedades del modelo
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    paracuando: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    costo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origen: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    destino: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Opciones del modelo
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "reservas",
  }
);

(async () => {
  await Reserva.sync();
  console.log('Tabla "reservas" creada en la base de datos');
})();

module.exports = Reserva;
