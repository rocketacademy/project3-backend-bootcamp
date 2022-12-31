"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("gitHubSubmissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cadetId: {
        type: Sequelize.INTEGER,
        references: {
          model: "cadets",
          key: "id",
        },
      },
      chapterId: {
        type: Sequelize.INTEGER,
        references: {
          model: "chapters",
          key: "id",
        },
      },
      repoUrl: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("gitHubSubmissions");
  },
};
