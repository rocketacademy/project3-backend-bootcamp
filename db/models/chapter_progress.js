"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chapter_progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chapter_progress.init(
    {
      cadetId: DataTypes.INTEGER,
      chapterId: DataTypes.INTEGER,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "chapter_progress",
    }
  );
  return chapter_progress;
};
