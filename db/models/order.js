"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.hasMany(models.order_history);
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.shipping_method, {
        foreignKey: "shippingMethodId",
      });
      this.belongsTo(models.user_discount, {
        foreignKey: "userDiscountId",
      });
      this.belongsToMany(models.product, {
        through: "product_order",
      });
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      orderDate: DataTypes.DATE,
      totalPrice: DataTypes.DECIMAL,
      shippingMethodId: DataTypes.INTEGER,
      userDiscountId: DataTypes.INTEGER,
      userDiscountAmount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "order",
      underscored: true,
    }
  );
  return Order;
};
