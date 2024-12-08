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
      missionStatement: DataTypes.STRING,
      headquarters: DataTypes.STRING,
      //not sure if should put number or int
      phone: DataTypes.INTEGER,
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
