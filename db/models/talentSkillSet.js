"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TalentSkillSet extends Model {
    static associate(models) {
      this.belongsTo(models.talent, { foreignKey: "talentId" });
    }
  }
  TalentSkillSet.init(
    {
      skill: DataTypes.STRING,
      proficiencyLevel: DataTypes.STRING,
      talentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "talentSkillSet",
      underscored: true,
    }
  );
  return TalentSkillSet;
};
