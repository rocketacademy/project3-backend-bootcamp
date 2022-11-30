"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cadetSections",
      [
        {
          cadetId: 1,
          sectionId: 1,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 1,
          sectionId: 2,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 2,
          sectionId: 1,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 3,
          sectionId: 1,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cadetSections", null, {});
  },
};
