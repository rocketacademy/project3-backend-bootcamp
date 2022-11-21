"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chapter.init(
    {
      name: DataTypes.STRING,
      chapter_index: DataTypes.FLOAT,
      moduleId: DataTypes.INTEGER,
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "chapter",
    }
  );
  return chapter;
};
