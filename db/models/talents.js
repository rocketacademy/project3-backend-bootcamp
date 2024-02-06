"use strict";

//write in JS format.

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Talent extends Model {}
  Talent.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "talent", //non-plurul
      underscored: true,
    }
  );
  return Talent;
};
