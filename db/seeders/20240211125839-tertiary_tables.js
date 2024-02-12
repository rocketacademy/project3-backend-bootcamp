"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("job_listing_benefits", [
      {
        job_listing_id: 1,
        benefit_id: 1,
      },
      {
        job_listing_id: 1,
        benefit_id: 3,
      },
      {
        job_listing_id: 1,
        benefit_id: 7,
      },
    ]);

    await queryInterface.bulkInsert("talent_benefits", [
      {
        talent_id: 1,
        benefit_id: 2,
      },
      {
        talent_id: 1,
        benefit_id: 4,
      },
      {
        talent_id: 1,
        benefit_id: 6,
      },
    ]);

    await queryInterface.bulkInsert("messages", [
      {
        talent_id: 1,
        chatroom_id: 1,
        message: "Hello, I am interested in the job listing.",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("job_listing_benefits");
    await queryInterface.dropTable("talent_benefits");

    await queryInterface.dropTable("messages");
  },
};
