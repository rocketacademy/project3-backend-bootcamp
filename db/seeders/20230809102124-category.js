"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Electronic Accessories",
        description:
          "Mobile Accessories, Audio Wearables, Console Accessories, Camera Accessories, Computer Accessories, Storage, Printers. Computer Components, Network Components",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Electronic Devices",
        description:
          "Mobile , Tablets, Laptops, Desktops Computers, Gaming Consoles, Action/Video Cameras, Security Camera, Gadgets & Drones",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "TV & Home Appliances",
        description:
          "TV & Video Devices, Home Audio, TV Accessories, small Kitchen Appliances, Cooling & Air Treatment, Vacuums & Floor Care, Personal Care Appliances, Parts & Accessories",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Health & Beauty ",
        description:
          "Skincare, Make-up, Hair Care, Bath & Body, Food Supplements, Personal Care, Fragrances, Men's Care, Beauty Tools, Medical Supplies, Adult Diaper & Incontinence, Sexual Wellness",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Babies & Toys",
        description:
          "Mother & Baby, Diapers & Wipes, Milk Formula & Baby Food, Nursing & Feeding, Baby Fashion & Accessories, Baby Gear, Bath & Baby Care, Maternity & Nursery, Toys & Games, Electronic & Remote Control Toys, Sports Toys & Outdoor Play, Baby & Toddler Toys",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Groceries & Pets",
        description:
          "Beer, Wines and Spirits, Drinks, Food Staples & Cooking Essential, Chocolate, Snacks & Sweets, Breakfast Cereals & Spreads, Pet Food, Pet Accessories, Household Supplies, Fruit & Vegetables, Meat & Seafood, Diary & Chilled, Frozen",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Home & Lifestyle",
        description:
          "Bath, Bedding, Furniture, Lighting, Home Decor, Kitchen & Dining, Outdoor & Garden, Storage & Organisation, Tools & Home Improvement, Laundry & Cleaning Equipment, Stationery & Craft, Media, Music & Books",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Women's Fashion",
        description:
          "Women's Clothing, Women's Shoes, Lingerir, Sleep & Lounge, Swimwear & Beachwear, Girls' Clothing, Girls' Shoes, Kids Watches",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Men's Fashion",
        description:
          "Men's Clothing, Men's Shoes, Underwear, Boys' Clothing, Boys' Shoes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Fashion Accessories",
        description:
          "Women's Bags, Travel, Men's Bags, Kids' Bags, Men's Watches, Women's Watches, Fashion Jewellery, Eyewear, Women Accessories, Men Accessories, Invetment Precious Metal",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("categories");
  },
};
