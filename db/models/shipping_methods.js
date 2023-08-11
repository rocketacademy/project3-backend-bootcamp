"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shipping_Method extends Model {
    static associate(models) {
      this.hasMany(models.order);
    }
  }
  Shipping_Method.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "shipping_method",
      underscored: true,
    }
  );
  return Shipping_Method;
};
