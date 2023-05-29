"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    static associate(models) {
      this.hasMany(models.participant, {
        foreignKey: "race_id",
      });
    }
  }
  Race.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "race",
      underscored: true,
      timestamps: false,
    }
  );
  return Race;
};
