"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MaritalStatus extends Model {
    static associate(models) {
      this.hasMany(models.participant, {
        foreignKey: "marital_status_id",
      });
    }
  }
  MaritalStatus.init(
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
      modelName: "marital_status",
      underscored: true,
      timestamps: false,
    }
  );
  return MaritalStatus;
};
