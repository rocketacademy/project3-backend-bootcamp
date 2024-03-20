"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { as: "bene" });
      this.belongsTo(models.donation);
    }
  }
  request.init(
    {
      donation_id: DataTypes.INTEGER,
      bene_id: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      status: DataTypes.ENUM("pending"),
    },
    {
      sequelize,
      modelName: "request",
      underscored: true,
    }
  );
  return request;
};
