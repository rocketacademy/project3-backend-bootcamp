"use strict";

//write in JS format.

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Benefit extends Model {}
  Benefit.init(
    {
      category: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "benefit", //non-plurul
      underscored: true,
    }
  );
  return Benefit;
};
