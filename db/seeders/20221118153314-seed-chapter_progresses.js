"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "chapter_progresses",
      [
        {
          cadet_id: 1,
          chapter_id: 1,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadet_id: 1,
          chapter_id: 2,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadet_id: 2,
          chapter_id: 1,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadet_id: 3,
          chapter_id: 1,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("chapter_progresses", null, {});
  },
};
