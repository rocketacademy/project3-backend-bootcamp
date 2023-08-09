"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { as: "seller", foreignKey: "userId" });
      this.belongsToMany(models.category, {
        as: "category",
        through: "product_category",
      });
      this.hasMany(models.photos);
      this.belongsTo(models.seller_discount, {
        as: "discount",
        foreignKey: "discountId",
      });
      this.belongsTo(models.shipping_method, {
        as: "shipping",
        foreignKey: "shippingMethod",
      });
      this.hasMany(models.reviews);
      this.hasMany(models.like);
      this.hasMany(models.chat);
      this.belongsToMany(models.current_cart, {
        as: "product",
        through: "current_cart_product",
      });
      this.belongsToMany(models.order, {
        as: "order",
        through: "product_order",
      });
    }
  }
  product.init(
    {
      sellerId: DataTypes.INTEGER,
      discountId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      shippingMethod: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
      underscored: true,
    }
  );
  return product;
};

// 1 user can sell many products
