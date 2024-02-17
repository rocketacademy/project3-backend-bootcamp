"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TalentWorkExperience extends Model {
    static associate(models) {
      this.belongsTo(models.talent, { foreignKey: "talentId" });
    }
  }
  TalentWorkExperience.init(
    {
      companyName: DataTypes.STRING,
      position: DataTypes.STRING,
      responsibility: DataTypes.STRING,
      startMonth: DataTypes.STRING,
      startYear: DataTypes.STRING,
      endMonth: DataTypes.STRING,
      endYear: DataTypes.STRING,
      talentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "talentWorkExperience",
      underscored: true,
    }
  );
  return TalentWorkExperience;
};
