"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Product extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.product, { foreignKey: "productId" });
    }
  }
  User_Product.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      transaction_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_product",
      underscored: true,
    }
  );
  return User_Product;
};
