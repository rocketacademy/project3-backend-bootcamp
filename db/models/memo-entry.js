"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MemoEntry extends Model {
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
  MemoEntry.init(
    {
      cadetId: {
        type: DataTypes.INTEGER,
        references: {
          model: "cadet",
          key: "id",
        },
      },
      slId: {
        type: DataTypes.INTEGER,
        references: {
          model: "sl",
          key: "id",
        },
      },
      generalInput: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "memoEntry",
    }
  );
  return MemoEntry;
};
