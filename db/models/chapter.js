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
      this.belongsToMany(models.cadet, { through: "cadet_chapters" });
      this.hasMany(models.cadet_chapter);
      this.hasMany(models.comment);
      this.belongsTo(models.module);
    }
  }
  chapter.init(
    {
      name: DataTypes.STRING,
      chapter_index: DataTypes.FLOAT,
      moduleId: {
        type: DataTypes.INTEGER,
        references: {
          model: "module",
          key: "id",
        },
      },
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "chapter",
    }
  );
  return chapter;
};
