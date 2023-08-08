"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.order);
    }
  }
  user_discount.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        references: { model: "order", key: "id" },
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      discountAmount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "user_discount",
      underscored: true,
    }
  );
  return user_discount;
};
