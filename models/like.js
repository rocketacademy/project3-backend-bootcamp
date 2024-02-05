"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.listing, { foreignKey: "listingId" });
    }
  }
  Like.init(
    {
      listingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },

      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "like",
      underscored: true,
    }
  );
  return Like;
};
