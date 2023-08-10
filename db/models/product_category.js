"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Category extends Model {
    static associate(models) {
      this.belongsTo(models.product, { foreignKey: "productId" });
      this.belongsto(models.category, { foreignKey: "categoryId" });
    }
  }
  Product_Category.init(
    {
      productId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product_category",
      underscored: true,
    }
  );
  return Product_Category;
};
