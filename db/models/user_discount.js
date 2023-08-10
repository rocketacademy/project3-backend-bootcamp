"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Discount extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.order);
    }
  }
  User_Discount.init(
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
  return User_Discount;
};
