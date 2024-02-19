"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("job_listings", [
      {
        employer_id: 1,
        job_title: "Frontend Developer",
        description: "Building user interfaces for web applications.",
        job_responsibility: "Design and implement user-facing features.",
        skill_set: "HTML, CSS, JavaScript, React",
        application_start_date: "2024-02-10",
        application_end_date: "2024-03-20",
      },
      {
        employer_id: 1,
        job_title: "Backend Developer",
        description: "Creating and maintaining server-side logic.",
        job_responsibility: "Develop backend components and APIs.",
        skill_set: "Node.js, Express, MongoDB",
        application_start_date: "2024-02-03",
        application_end_date: "2024-02-28",
      },
      {
        employer_id: 2,
        job_title: "Accountant",
        description: "Managing financial records and transactions.",
        job_responsibility: "Prepare financial statements and reports.",
        skill_set: "Accounting software, Financial analysis, Taxation",
        application_start_date: "2024-02-04",
        application_end_date: "2024-03-04",
      },
      {
        employer_id: 3,
        job_title: "Graphic Designer",
        description:
          "Creating visual concepts and designs for various projects.",
        job_responsibility:
          "Develop visual elements for print and digital media.",
        skill_set: "Adobe Creative Suite, Graphic design principles",
        application_start_date: "2024-02-03",
        application_end_date: "2024-03-28",
      },
      {
        employer_id: 3,
        job_title: "UI/UX Designer",
        description:
          "Designing user interfaces and experiences for digital products.",
        job_responsibility: "Create wireframes, mockups, and prototypes.",
        skill_set: "UI/UX design tools, User research, Prototyping",
        application_start_date: "2024-02-03",
        application_end_date: "2024-03-28",
      },
      {
        employer_id: 3,
        job_title: "Web Designer",
        description:
          "Designing and creating websites with a focus on aesthetics and usability.",
        job_responsibility:
          "Develop visually appealing and functional web layouts.",
        skill_set: "HTML, CSS, JavaScript, Responsive design",
        application_start_date: "2024-02-03",
        application_end_date: "2024-03-28",
      },
    ]);

    await queryInterface.bulkInsert("job_listing_benefits", [
      {
        job_listing_id: 2,
        benefit_id: 4,
      },
      {
        job_listing_id: 2,
        benefit_id: 7,
      },
      {
        job_listing_id: 2,
        benefit_id: 9,
      },
      {
        job_listing_id: 3,
        benefit_id: 1,
      },
      {
        job_listing_id: 3,
        benefit_id: 3,
      },
      {
        job_listing_id: 3,
        benefit_id: 8,
      },
      {
        job_listing_id: 4,
        benefit_id: 2,
      },
      {
        job_listing_id: 4,
        benefit_id: 5,
      },
      {
        job_listing_id: 4,
        benefit_id: 10,
      },
      {
        job_listing_id: 5,
        benefit_id: 1,
      },
      {
        job_listing_id: 5,
        benefit_id: 6,
      },
      {
        job_listing_id: 5,
        benefit_id: 8,
      },
      {
        job_listing_id: 6,
        benefit_id: 3,
      },
      {
        job_listing_id: 6,
        benefit_id: 4,
      },
      {
        job_listing_id: 6,
        benefit_id: 9,
      },
      {
        job_listing_id: 7,
        benefit_id: 2,
      },
      {
        job_listing_id: 7,
        benefit_id: 5,
      },
      {
        job_listing_id: 7,
        benefit_id: 10,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("job_listings");
    await queryInterface.dropTable("job_listing_benefits");
  },
};
