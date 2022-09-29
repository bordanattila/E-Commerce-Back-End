// import important parts of sequelize library
const { Model, DataTypes, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DECIMAL,
      allowNull: false,
      validator: {
        isDecimal: true, 
      },
    },
    stock: {
      type: INTEGER,
      allowNull:false,
      defaultValue: 10,
      validator: {
        isNumeric: true,
      }
    },
    category_id: {
      type: INTEGER,
      referendes: {
        model: "category",
        key: "id", 
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
