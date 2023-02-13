"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {}
  Like.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      review_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "review",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      like: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "like",
      tableName: "likes",
      underscored: true,
    }
  );
  return Like;
};
