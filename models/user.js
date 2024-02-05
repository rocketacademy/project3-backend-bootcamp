"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.listing, { as: "buyer", foreignKey: "buyerId" });
      this.hasMany(models.listing, { as: "seller", foreignKey: "sellerId" });
      this.hasMany(models.chatroom_message, { foreignKey: "chatroomId" });
      this.hasMany(models.chatroom, { foreignKey: "potentialBuyerId" });
      this.hasMany(models.review, { foreignKey: "userId" });
      this.hasMany(models.like, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      profilePicture: DataTypes.STRING,
      bio: DataTypes.STRING,
      style: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return User;
};
