"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_order extends Model {
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
  product_order.init(
    {
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product_order",
      underscored: true,
    }
  );
  return product_order;
};
