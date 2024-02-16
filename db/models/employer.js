"use strict";

//write in JS format.

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employer extends Model {
    static associate(models) {
      this.hasMany(models.jobListing, { foreignKey: "employerId" });
    }
  }
  Employer.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      companyName: DataTypes.STRING,
      description: DataTypes.STRING,
      photo: DataTypes.STRING,
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
