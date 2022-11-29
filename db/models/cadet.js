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
      this.belongsToMany(models.section, {
        through: {
          model: "cadet_section",
          unique: false,
        },
        constraints: false,
      });
      this.belongsToMany(models.chapter, {
        through: {
          model: "cadet_chapters",
          unique: false,
        },
        constraints: false,
      });
      this.hasMany(models.cadet_section);
      // this.hasMany(models.cadet_chapter);
      // this.hasMany(models.note);
      // this.hasMany(models.appointment);
      // this.hasMany(models.memo_entry);
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
