"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.address);
      this.hasMany(models.order);
      this.hasMany(models.review);
      this.hasMany(models.chat);
      this.hasOne(models.current_cart);
      this.hasMany(models.like);
    }
  }
  users.init(
    {
      id: DataTypes.INTEGER,
      userName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      mobileNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "users",
      underscored: true,
    }
  );

  return users;
};
