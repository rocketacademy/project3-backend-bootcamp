"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.order, { foreignKey: "orderId" });
      this.belongsTo(models.product, { foreignKey: "productId" });
    }
  }
  Product_Order.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      subtotalPrice: DataTypes.DECIMAL,
      sellerDiscountAmount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "product_order",
      underscored: true,
    }
  );
  return Product_Order;
};
