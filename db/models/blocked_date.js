"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class blocked_date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blocked_date.init(
    {
      date: DataTypes.DATE,
      slId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "blocked_date",
    }
  );
  return blocked_date;
};
