"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.users, { through: "bids" });
      this.belongsTo(models.user, { as: "buyer", foreignKey: "buyer_id" });
      this.belongsTo(models.user, { as: "seller", foreignKey: "seller_id" });
      this.belongsTo(models.watches, { as: "watch", foreignKey: "watch_id" });
    }
  }
  listings.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      image_link: DataTypes.STRING,
      seller_id: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
      },
      buyer_id: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
      },
      watch_id: {
        type: DataTypes.INTEGER,
        references: { model: "watches", key: "id" },
      },
      starting_bid: DataTypes.INTEGER,
      buyout_price: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      ending_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "listings",
      underscored: true,
    }
  );
  return listings;
};
