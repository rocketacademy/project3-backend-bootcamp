"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cadet_chapter extends Model {
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
  cadet_chapter.init(
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
      modelName: "cadet_chapter",
    }
  );
  return cadet_chapter;
};
