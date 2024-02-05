"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.listing, { foreignKey: "listingId" });
    }
  }
  Review.init(
    {
      comment: DataTypes.STRING,
      rating: DataTypes.INTEGER,

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
      modelName: "review",
      underscored: true,
    }
  );
  return Review;
};
