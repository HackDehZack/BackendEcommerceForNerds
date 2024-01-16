const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    // Category model definition
  }
  // Sequelize model initialization
  return Category.init(
    {
      // Model attributes
    },
    {
      sequelize,
      modelName: 'Category',
      // Other model options
    }
  );
};