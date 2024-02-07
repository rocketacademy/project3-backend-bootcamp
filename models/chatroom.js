"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chatroom extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "potentialBuyerId" });
      this.belongsTo(models.listing, { foreignKey: "listingId" });
    }
  }
  Chatroom.init(
    {
      listingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },

      potentialBuyerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "chatroom",
      underscored: true,
    }
  );
  return Chatroom;
};
