"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "module_progresses",
      [
        {
          cadet_id: 1,
          module_id: 0,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadet_id: 1,
          module_id: 1,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadet_id: 2,
          module_id: 0,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadet_id: 3,
          module_id: 0,
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
