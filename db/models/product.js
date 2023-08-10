"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.reviews);
      this.hasMany(models.like);
      this.hasMany(models.chat);
      this.hasMany(models.photos);
      this.belongsTo(models.seller_discount, {
        foreignKey: "discountId",
        as: "sellerDiscountId",
      });
      this.belongsTo(models.shipping_method, {
        foreignKey: "shippingMethod",
      });
      this.belongsTo(models.category, {
        foreignKey: "categoryId",
      });
      this.belongsToMany(models.user, {
        through: "user_product",
        foreignKey: "productId",
      });
      this.belongsToMany(models.current_cart, {
        through: "current_cart_product",
      });
      this.belongsToMany(models.order, {
        through: "product_order",
      });
    }
  }
  Product.init(
    {
      sellerId: DataTypes.INTEGER,
      discountId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.TEXT,
      categoryId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
      underscored: true,
    }
  );
  return Product;
};

// 1 user can sell many products
