"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "memo_entries",
      [
        {
          cadetId: 1,
          slId: 1,
          general_input: "why me",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 2,
          slId: 2,
          general_input: "yes you",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 3,
          slId: 3,
          general_input: "it cant be",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("memo_entries", null, {});
  },
};
