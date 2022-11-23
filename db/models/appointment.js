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
      this.belongsTo(models.cadet);
      this.belongsTo(models.sl);
    }
  }
  appointment.init(
    {
      start_datetime: DataTypes.DATE,
      end_datetime: DataTypes.DATE,
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
      current_sl: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "appointment",
    }
  );
  return appointment;
};
