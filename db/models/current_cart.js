"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class current_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.product, { through: "current_cart_product" });
      this.belongsto(models.user, { foreignKey: "userId" });
    }
  }
  current_cart.init(
    {
      userId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "current_cart",
      underscored: true,
    }
  );
  return current_cart;
};
