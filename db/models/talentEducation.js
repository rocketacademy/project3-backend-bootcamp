"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TalentEducation extends Model {
    static associate(models) {
      this.belongsTo(models.talent, { foreignKey: "talentId" });
    }
  }
  TalentEducation.init(
    {
      institution: DataTypes.STRING,
      degree: DataTypes.STRING,
      fieldOfStudy: DataTypes.STRING,
      graduationMonth: DataTypes.STRING,
      graduationYear: DataTypes.STRING,
      talentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "talentEducation",
      underscored: true,
    }
  );
  return TalentEducation;
};
