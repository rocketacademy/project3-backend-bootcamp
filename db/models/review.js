"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.rating_category, {
        as: "rating",
        foreignKey: "ratingId",
      });
      this.belongsTo(models.product, { foreignKey: "productId" });
      this.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  review.init(
    {
      productId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING,
      ratingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "review",
      underscored: true,
    }
  );
  return review;
};
