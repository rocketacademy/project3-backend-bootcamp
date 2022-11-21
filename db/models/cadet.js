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
      this.hasMany(models.module_progress);
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
