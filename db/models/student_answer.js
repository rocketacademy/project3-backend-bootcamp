"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student_answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_answer.init(
    {
      user_id: DataTypes.INTEGER,
      questionnaire_id: DataTypes.INTEGER,
      answer: DataTypes.TEXT,
      teacher_comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "student_answer",
      underscored: true,
    }
  );
  return Student_answer;
};
