"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          content: "hello world",
          chapterId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "daddy",
          chapterId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "daddy who",
          chapterId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "daddy Foong",
          chapterId: "1",
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
