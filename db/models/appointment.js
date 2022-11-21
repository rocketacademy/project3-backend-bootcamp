"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  appointment.init(
    {
      start_datetime: DataTypes.DATE,
      end_datetime: DataTypes.DATE,
      slId: DataTypes.INTEGER,
      cadetId: DataTypes.INTEGER,
      current_sl: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "appointment",
    }
  );
  return appointment;
};
