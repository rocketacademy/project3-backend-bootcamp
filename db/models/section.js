"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.cadet, {
        through: {
          model: "cadet_section",
          unique: false,
        },
        constraints: false,
      });
      this.hasMany(models.cadet_section);
      // this.hasMany(models.chapter);
    }
  }
  section.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "section",
    }
  );
  return section;
};
