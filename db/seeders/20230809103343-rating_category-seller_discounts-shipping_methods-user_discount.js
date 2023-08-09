"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    "use strict";
    await queryInterface.bulkInsert("rating_categories", [
      {
        name: "1 star",
        description: "Very Poor",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "2 stars",
        description: "Poor",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "3 stars",
        description: "Average",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "4 stars",
        description: "Good",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "5 stars",
        description: "Excellent",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("seller_discounts", [
      {
        name: "1.1 Sales",
        description: "1% off",
        discount_amount: 0.01,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "2.2 Sales",
        description: "2% off",
        discount_amount: 0.02,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "3.3 Sales",
        description: "3% off",
        discount_amount: 0.03,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "4.4 Sales",
        description: "4% off",
        discount_amount: 0.04,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "5.5 Sales",
        description: "5% off",
        discount_amount: 0.05,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "6.6 Sales",
        description: "6% off",
        discount_amount: 0.06,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "7.7 Sales",
        description: "7% off",
        discount_amount: 0.01,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "8.8 Sales",
        description: "8% off",
        discount_amount: 0.01,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "9.9 Sales",
        description: "9% off",
        discount_amount: 0.09,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "10.10 Sales",
        description: "10% off",
        discount_amount: 0.1,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "11.11 Sales",
        description: "11% off",
        discount_amount: 0.11,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "12.12 Sales",
        description: "12% off",
        discount_amount: 0.12,
        valid_from: null,
        valid_till: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("shipping_methods", [
      {
        name: "Speedpost",
        description: "Point to Point Delivery to your door step",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Qexpress",
        description: "Point to Point Delivery to your door step ",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Smart Locker",
        description: "Point to Locker Pickup point",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("user_discounts", [
      {
        name: "5% off",
        description: "5% off for a minimum spending of $100",
        discount_amount: 0.05,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "10% off",
        description: "10% off for a minimum spending of $250",
        discount_amount: 0.1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "15% off",
        description: "15% off for a minimum spending of $250",
        discount_amount: 0.15,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_discounts");
    await queryInterface.dropTable("shipping_methods");
    await queryInterface.dropTable("seller_discounts");
    await queryInterface.dropTable("rating_categories");
  },
};
