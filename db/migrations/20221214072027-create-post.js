"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      author: {
        type: Sequelize.INTEGER,
        references: {
          model: "cadets",
          key: "id",
        },
      },
      authorName: {
        type: Sequelize.TEXT,
      },
      authorImage: {
        type: Sequelize.TEXT,
      },
      chapterId: {
        type: Sequelize.INTEGER,
        references: {
          model: "chapters",
          key: "id",
        },
      },
      content: {
        type: Sequelize.TEXT,
      },
      views: {
        type: Sequelize.INTEGER,
      },
      upvotes: {
        type: Sequelize.INTEGER,
      },
      time: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("posts");
  },
};
