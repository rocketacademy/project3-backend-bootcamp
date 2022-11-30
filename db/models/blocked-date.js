"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BlockedDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.sl);
    }
  }
  BlockedDate.init(
    {
      date: DataTypes.DATE,
      slId: {
        type: DataTypes.INTEGER,
        references: {
          model: "sl",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "blockedDate",
    }
  );
  return BlockedDate;
};
