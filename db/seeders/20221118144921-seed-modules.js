"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "modules",
      [
        {
          name: "welcome to bootcamp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "logistics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "general reference",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "foundations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "frontend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "full stack",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "backend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "capstone",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "algorithms",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "interview prep",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("modules", null, {});
  },
};
