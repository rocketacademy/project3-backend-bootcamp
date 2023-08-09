"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class seller_discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.product);
    }
  }
  seller_discount.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      discountAmount: DataTypes.DECIMAL,
      validTill: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "seller_discount",
      underscored: true,
    }
  );
  return seller_discount;
};
