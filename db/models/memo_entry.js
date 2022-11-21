"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class memo_entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  memo_entry.init(
    {
      cadetId: DataTypes.INTEGER,
      slId: DataTypes.INTEGER,
      general_input: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "memo_entry",
    }
  );
  return memo_entry;
};
