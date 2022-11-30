"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "memoEntries",
      [
        {
          cadetId: 1,
          slId: 1,
          generalInput: "why me",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 2,
          slId: 2,
          generalInput: "yes you",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadetId: 3,
          slId: 3,
          generalInput: "it cant be",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("memoEntries", null, {});
  },
};
