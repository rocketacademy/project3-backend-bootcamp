"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cadet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.module, {
        through: "cadet_modules",
      });
      this.belongsToMany(models.chapter, {
        through: "cadet_chapters",
      });
      this.hasMany(models.cadet_module);
      this.hasMany(models.cadet_chapter);
      // this.hasMany(models.chapter_progress);
      this.hasMany(models.note);
      this.hasMany(models.appointment);
      this.hasMany(models.memo_entry);
    }
  }
  cadet.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      photo_link: DataTypes.STRING,
      class: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "cadet",
    }
  );
  return cadet;
};
