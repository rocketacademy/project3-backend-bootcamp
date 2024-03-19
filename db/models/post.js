"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { as: "author" });
    }
  }
  post.init(
    {
      title: DataTypes.STRING,
      authorId: {
        type: DataTypes.INTEGER,
        references: { model: "user", key: "id" },
      },
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "post",
      underscored: true,
    }
  );
  return post;
};
