"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { as: "user", foreignKey: "user_id" });
    }
  }
  wishlist.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
      },
      fav_brand: DataTypes.STRING,
      fav_model: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "wishlist",
      underscored: true,
    }
  );
  return wishlist;
};
