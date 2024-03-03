'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  basket.init({
    sellerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    originalPrice: DataTypes.INTEGER,
    discountedPrice: DataTypes.INTEGER,
    pickupStartTime: DataTypes.DATE,
    pickupEndTime: DataTypes.DATE,
    stock: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    allergens: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    weightPerUnit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'basket',
    underscored: true,
  });
  return basket;
};