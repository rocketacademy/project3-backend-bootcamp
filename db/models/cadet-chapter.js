"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CadetChapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cadet);
      this.belongsTo(models.chapter);
    }
  }
  CadetChapter.init(
    {
      cadetId: {
        type: DataTypes.INTEGER,
        references: {
          model: "cadet",
          key: "id",
        },
      },
      chapterId: {
        type: DataTypes.INTEGER,
        references: {
          model: "chapter",
          key: "id",
        },
      },
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "cadetChapter",
    }
  );
  return CadetChapter;
};
