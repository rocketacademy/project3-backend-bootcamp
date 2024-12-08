"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TalentResume extends Model {
    static associate(models) {
      this.belongsTo(models.talent, { foreignKey: "talentId" });
    }
  }
  TalentResume.init(
    {
      location: DataTypes.STRING,
      industry: DataTypes.STRING,
      title: DataTypes.STRING,
      objective: DataTypes.STRING,
      talentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "talentResume", //non-plurul
      underscored: true,
    }
  );
  return TalentResume;
};
