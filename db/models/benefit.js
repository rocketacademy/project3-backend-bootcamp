"use strict";

//write in JS format.

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Benefit extends Model {
    static associate(models) {
      this.belongsToMany(models.talent, { through: "talent_benefits" });
    }
  }
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
