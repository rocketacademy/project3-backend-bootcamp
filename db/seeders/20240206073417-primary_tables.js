"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("talents", [
      {
        first_name: "Spidey",
        last_name: "boy",
        email: "kid2010@text.com",
      },
      {
        first_name: "Genz",
        last_name: "Goose",
        email: "goosegoose@text.com",
      },
      {
        first_name: "Cat",
        last_name: "Dog",
        email: "bestpetever@text.com",
      },
    ]);

    await queryInterface.bulkInsert("employers", [
      {
        first_name: "Tony",
        last_name: "Stark",
        company_name: "Avengers",
        description: "somewhere in NYC",
        email: "tonystark@test.com",
      },
      {
        first_name: "Widow",
        last_name: "Black",
        company_name: "Red Room",
        description: "everywhere",
        email: "blackwidow@text.com",
      },
      {
        first_name: "Hulk",
        last_name: "Green",
        company_name: "underground lab",
        description: "everywhere",
        email: "blackwidow@text.com",
      },
    ]);

    await queryInterface.bulkInsert("benefits", [
      {
        category: "Meaningful Impact",
        description:
          "Cultivate personal fulfilment by contributing to a purpose-driven organisation, creating a positive impact that extends beyond the confines of the workplace.",
      },
      {
        category: "Harmony in Life and Work",
        description:
          "Achieving a harmonious balance between personal and professional life promotes well-being and contentment for all involved.",
      },
      {
        category: "Professional Advancement",
        description:
          "Unlock continuous pathways for career growth, providing opportunities for individuals to progress and excel in their chosen fields.",
      },
      {
        category: "Competitive Compensation",
        description:
          "Receive equitable and competitive compensation packages, ensuring financial security and acknowledgement for valuable contributions in the dynamic job market.",
      },
      {
        category: "Stability and Assurance",
        description:
          "Establish a foundation of job security, creating a stable environment for organisational growth and individual flourishing in a secure professional space.",
      },
      {
        category: "Inclusive Workplace Culture",
        description:
          "Embrace diversity and nurture a company culture that values inclusivity, fostering a collaborative environment that attracts and retains a rich tapestry of talents.",
      },
      {
        category: "Flexible Work Arrangements",
        description:
          "Tailor work setups to accommodate diverse needs, promoting flexibility in the workplace to enhance productivity and job satisfaction.",
      },
      {
        category: "Guidance and Continuous Learning:",
        description:
          "Access mentorship and a spectrum of learning opportunities for continuous personal and professional development, empowering growth for individuals at all career stages.",
      },
      {
        category: "Holistic Well-being Support",
        description:
          "Prioritise health and overall well-being through comprehensive support systems, including insurance, ensuring the holistic welfare of everyone involved.",
      },
      {
        category: "Community Impact and Social Responsibility",
        description:
          "Contribute to a broader social impact by aligning with organisations that make a positive difference.",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("talents");
    await queryInterface.dropTable("employers");
    await queryInterface.dropTable("benefits");
  },
};
