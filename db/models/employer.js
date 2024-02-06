"use strict";

//write in JS format.

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employer extends Model {}
  Employer.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      companyName: DataTypes.STRING,
      description: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "employer", //non-plurul
      underscored: true,
    }
  );
  return Employer;
};
