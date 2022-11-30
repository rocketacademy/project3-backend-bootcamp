"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sections",
      [
        {
          name: "Welcome To Bootcamp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Logistics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "General Reference",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Foundations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frontend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Full Stack",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Backend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Capstone",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Algorithms",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Interview Prep",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sections", null, {});
  },
};
