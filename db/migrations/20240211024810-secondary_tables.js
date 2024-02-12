"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("talents_resume", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      talent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "talents",
          key: "id",
        },
      },
      location: {
        type: Sequelize.STRING,
      },
      industry: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      objective: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    });

    await queryInterface.createTable("talents_work_experiences", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      talent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "talents",
          key: "id",
        },
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      responsibility: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start_month: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start_year: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      end_month: {
        type: Sequelize.STRING,
      },
      end_year: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    });

    await queryInterface.createTable("talents_skill_set", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      talent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "talents",
          key: "id",
        },
      },
      skill: {
        type: Sequelize.STRING,
      },
      proficiency_level: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    });

    await queryInterface.createTable("talents_education", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      talent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "talents",
          key: "id",
        },
      },
      institution: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      degree: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      field_of_study: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      graduation_month: {
        type: Sequelize.STRING,
      },
      graduation_year: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    });

    await queryInterface.createTable("job_listings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "employers",
          key: "id",
        },
      },
      job_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      job_responsibility: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      skill_set: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      application_start_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      application_end_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    });

    await queryInterface.createTable("applications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      job_listing_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "job_listings",
          key: "id",
        },
      },
      talent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "talents",
          key: "id",
        },
      },
      application_date: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      application_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    });

    await queryInterface.createTable("chatrooms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      application_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "applications",
          key: "id",
        },
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("talents_resume");
    await queryInterface.dropTable("talents_work_experiences");
    await queryInterface.dropTable("talents_skill_set");
    await queryInterface.dropTable("talents_education");
    await queryInterface.dropTable("job_listings");
    await queryInterface.dropTable("applications");
    await queryInterface.dropTable("chatrooms");
  },
};
