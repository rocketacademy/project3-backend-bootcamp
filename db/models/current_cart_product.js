"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class current_cart_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product, { foreignKey: "productId" });
      this.belongsTo(models.current_cart, { foreignKey: "currentCartId" });
    }
  }
  current_cart_product.init(
    {
      currentCartId: {
        type: DataTypes.INTEGER,
        references: {
          model: "current_cart",
          key: "id",
        },
      },
      productId: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    {
      sequelize,
      modelName: "current_cart_product",
      underscored: true,
    }
  );
  return current_cart_product;
};
