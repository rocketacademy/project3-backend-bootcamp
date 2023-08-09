"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product, { foreignKey: "productId" });
      this.belongsto(models.category, { foreignKey: "categoryId" });
    }
  }
  product_category.init(
    {
      productId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product_category",
      underscored: true,
    }
  );
  return product_category;
};
