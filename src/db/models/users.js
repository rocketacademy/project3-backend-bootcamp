'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({listings}) {
      this.hasMany(listings)
    }
  }
  users.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone_number: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      postal_code: DataTypes.INTEGER,
      role: DataTypes.STRING,
      mrt: DataTypes.STRING,
      username: DataTypes.STRING,
      profile_photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
      underscored: true,
    }
  );
  return users;
};