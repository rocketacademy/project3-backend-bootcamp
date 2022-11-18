"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "memo_entries",
      [
        {
          cadet_id: 1,
          sl_id: 1,
          general_input: "why me",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadet_id: 2,
          sl_id: 2,
          general_input: "yes you",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cadet_id: 3,
          sl_id: 3,
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
