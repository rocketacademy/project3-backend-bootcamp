'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.removeColumn("questionnaires", "users_class_subject_id")
    await queryInterface.addColumn("questionnaires", "test_id",{
        type: Sequelize.INTEGER,
        references: {
          model: "tests",
          key: "id",
        },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn("questionnaires", "users_class_subject_id")
    await queryInterface.removeColumn("questionnaires", "test_id",{
        type: Sequelize.INTEGER,
        references: {
          model: "tests",
          key: "id",
        }
    })
  }
}; 
