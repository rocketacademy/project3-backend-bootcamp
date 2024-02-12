"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("job_listing_benefits", {
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
      benefit_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "benefits",
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

    await queryInterface.createTable("talent_benefits", {
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
      benefit_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "benefits",
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

    await queryInterface.createTable("messages", {
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
      employer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "employers",
          key: "id",
        },
      },
      chatroom_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "chatrooms",
          key: "id",
        },
      },
      message: {
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("job_listing_benefits");
    await queryInterface.dropTable("talent_benefits");
    await queryInterface.dropTable("messages");
  },
};
