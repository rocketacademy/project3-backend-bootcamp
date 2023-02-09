"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listing_photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.listing);
    }
  }
  listing_photo.init(
    {
      listing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "listing",
          key: "id",
        },
      },
      URL: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "listing_photo",
      underscored: true,
    }
  );
  return listing_photo;
};
