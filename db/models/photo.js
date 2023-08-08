"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product, { as: "photo", foreignKey: "productId" });
    }
  }
  photo.init(
    {
      index: DataTypes.INTEGER,
      url: DataTypes.STRING,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "photo",
      underscored: true,
    }
  );
  return photo;
};
