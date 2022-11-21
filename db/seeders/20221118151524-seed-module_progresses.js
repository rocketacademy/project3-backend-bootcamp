"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "module_progresses",
      [
        {
          cadetId: 1,
          moduleId: 0,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 1,
          moduleId: 1,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 2,
          moduleId: 0,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 3,
          moduleId: 0,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("module_progresses", null, {});
  },
};
