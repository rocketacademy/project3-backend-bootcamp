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
    }
  }
  listings.init(
    {
      photo_url: DataTypes.STRING,
      category: DataTypes.STRING,
      item_name: DataTypes.STRING,
      description: DataTypes.TEXT,
      condition: DataTypes.STRING,
      listing_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "listings",
      underscored: true,
    }
  );
  return listings;
};
