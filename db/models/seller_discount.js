"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seller_Discount extends Model {
    static associate(models) {
      this.hasMany(models.product, { foreignKey: "id" });
    }
  }
  Seller_Discount.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      discountAmount: DataTypes.DECIMAL,
      validTill: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "seller_discount",
      underscored: true,
    }
  );
  return Seller_Discount;
};
