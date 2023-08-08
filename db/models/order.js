"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsToMany(models.product, {
        as: "product",
        through: "product_order",
      });
      this.belongsTo(models.shipping_methods, { foreignKey: "shippingMethod" });
      this.belongsTo(models.user_discount, { foreignKey: "discountId" });
      this.hasMany(models.order_history);
    }
  }
  order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: { model: "user", key: "id" },
      },
      orderDate: DataTypes.DATE,
      quantity: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL,
      shippingMethod: {
        type: DataTypes.INTEGER,
        references: { model: "shipping_method", key: "id" },
      },
      discountId: {
        type: DataTypes.INTEGER,
        references: { model: "user_discount", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "order",
      underscored: true,
    }
  );
  return order;
};
