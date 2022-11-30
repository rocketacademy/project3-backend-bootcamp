"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cadet);
      this.belongsTo(models.sl);
    }
  }
  Appointment.init(
    {
      startDatetime: DataTypes.DATE,
      endDatetime: DataTypes.DATE,
      slId: {
        type: DataTypes.INTEGER,
        references: {
          model: "sl",
          key: "id",
        },
      },
      cadetId: {
        type: DataTypes.INTEGER,
        references: {
          model: "cadet",
          key: "id",
        },
      },
      currentSl: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "appointment",
    }
  );
  return Appointment;
};
