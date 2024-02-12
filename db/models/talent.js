"use strict";

//write in JS format.

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Talent extends Model {
    static associate(models) {
      this.hasOne(models.talentResume, { foreignKey: "talentId" });
      this.hasMany(models.talentWorkExperience, { foreignKey: "talentId" });
      this.hasMany(models.talentSkillSet, { foreignKey: "talentId" });
      this.hasMany(models.talentEducation, { foreignKey: "talentId" });
      this.belongsToMany(models.benefit, { through: "talent_benefits" });
    }
  }
  Talent.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "talent", //non-plurul
      underscored: true,
    }
  );
  return Talent;
};
