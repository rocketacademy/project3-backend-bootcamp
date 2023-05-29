"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Nationality extends Model {
    static associate(models) {
      this.hasMany(models.participant, {
        foreignKey: "nationality_id",
      });
    }
  }
  Nationality.init(
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
      modelName: "nationality",
      underscored: true,
      timestamps: false,
    }
  );
  return Nationality;
};
