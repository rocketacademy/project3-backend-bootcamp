"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.order_history);
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "event",
      underscored: true,
    }
  );
  return Event;
};
