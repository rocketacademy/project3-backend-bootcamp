"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.basket, { foreignKey: "seller_id" });
      this.hasMany(models.feed, { foreignKey: "seller_id" });
      this.hasMany(models.sellerLike, { foreignKey: "seller_id" });
      this.hasMany(models.sellerReview, { foreignKey: "seller_id" });
      this.hasMany(models.message, { foreignKey: "sender_seller_id" });
      this.hasMany(models.chat, { foreignKey: "seller_id" });
      this.belongsTo(models.category, { foreignKey: "category_id" });
      this.belongsToMany(models.user, {
        through: models.sellerLike,
      });
      this.belongsToMany(models.user, {
        through: models.sellerReview,
      });
      this.belongsToMany(models.user, {
        through: models.chat,
      });
      this.belongsToMany(models.user, {
        through: models.message,
      });
    }
  }
  seller.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.TEXT,
      location: DataTypes.GEOMETRY,
      photo: DataTypes.TEXT,
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "category",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "seller",
      underscored: true,
    }
  );
  return seller;
};
