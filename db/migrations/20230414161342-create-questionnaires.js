"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("questionnaires", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      users_class_subject_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users_class_subjects",
          key: "id",
        },
      },
      question: {
        type: Sequelize.STRING,
      },
      option_a: {
        type: Sequelize.STRING,
      },
      option_b: {
        type: Sequelize.STRING,
      },
      option_c: {
        type: Sequelize.STRING,
      },
      option_d: {
        type: Sequelize.STRING,
      },
      option_e: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("questionnaires");
  },
};
