"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Listing_image extends Model {
    static associate(models) {
      this.belongsTo(models.listing, {
        foreignKey: "listingId",
        onDelete: "CASCADE",
      });
    }
  }
  Listing_image.init(
    {
      listingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },

      url: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "listing_image",
      underscored: true,
			noPrimaryKey:true
    }
  );
  return Listing_image;
};
