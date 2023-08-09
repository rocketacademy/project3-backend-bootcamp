"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      this.belongsTo(models.product, { as: "photo", foreignKey: "productId" });
    }
  }
  Photo.init(
    {
      index: DataTypes.INTEGER,
      url: DataTypes.STRING,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "photo",
      underscored: true,
    }
  );
  return Photo;
};
