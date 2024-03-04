"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class feed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.seller, { foreignKey: "seller_id" });
      this.hasMany(models.feedLike, { foreignKey: "feed_id" });
      this.hasMany(models.feedReview, { foreignKey: "feed_id" });
      this.belongsToMany(models.user, {
        through: models.feedLike,
      });
      this.belongsToMany(models.user, {
        through: models.feedReview,
      });
    }
  }
  feed.init(
    {
      sellerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "seller",
          key: "id",
        },
      },
      photo: DataTypes.TEXT,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "feed",
      underscored: true,
    }
  );
  return feed;
};
