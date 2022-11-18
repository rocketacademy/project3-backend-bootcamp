"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          content: "hello world",
          chapter_id: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "daddy",
          chapter_id: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "daddy who",
          chapter_id: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "daddy Foong",
          chapter_id: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
