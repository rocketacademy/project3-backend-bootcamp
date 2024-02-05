"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.listing, { foreignKey: "listingId" });
    }
  }
  Order.init(
    {
      trackingUrl: DataTypes.STRING,

      listingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "order",
      underscored: true,
    }
  );
  return Order;
};
