"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user);
      this.hasMany(models.listing_photo);
    }
  }
  listing.init(
    {
      category_name: DataTypes.STRING,
      item_name: DataTypes.STRING,
      description: DataTypes.STRING,
      giver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      condition: DataTypes.STRING,
      listing_type: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "listing",
      underscored: true,
    }
  );
  return listing;
};
