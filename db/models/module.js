"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.cadet, { through: "cadet_modules" });
      this.hasMany(models.cadet_module);
      this.hasMany(models.chapter);
    }
  }
  module.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "module",
    }
  );
  return module;
};
