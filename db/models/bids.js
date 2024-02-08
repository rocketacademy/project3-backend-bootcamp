"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bids extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { as: "buyer", foreignKey: "buyer_id" });
      this.belongsTo(models.listings, {
        as: "listing",
        foreignKey: "listing_id",
      });
    }
  }
  bids.init(
    {
      listing_id: {
        type: DataTypes.INTEGER,
        references: { model: "listings", key: "id" },
      },
      buyer_id: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
      },
      current_bid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bids",
      underscored: true,
    }
  );
  return bids;
};
