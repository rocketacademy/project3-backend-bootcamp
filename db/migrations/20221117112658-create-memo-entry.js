"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("memoEntries", {
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
      slId: {
        type: Sequelize.INTEGER,
        references: {
          model: "sls",
          key: "id",
        },
      },
      generalInput: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("memoEntries");
  },
};
