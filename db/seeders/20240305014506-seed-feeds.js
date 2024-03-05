"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "feeds",
      [
        {
          seller_id: 8,
          photo:
            "https://blog.resy.com/wp-content/uploads/2022/09/Congee-Dim-Sum-House-Dim-Sum-1-by-Michael-Tulipan-MST-Creative-PR-2000x1125.jpg",
          content:
            "Dim Sum lovers rejoice! We're offering a special discount on all unsold dim sum items this evening. Don't miss out on this delicious deal!",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 11,
          photo:
            "https://lawnlove.com/blog/wp-content/uploads/2023/08/compost-1.jpg",
          content:
            "Proud to share our journey towards sustainability! We've started composting our organic waste and partnering with local farms for ingredients. Every meal you enjoy supports a greener planet",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 5,
          photo:
            "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2022/09/25085828/ICE-2-scaled-e1664204852618.jpeg",
          content:
            "Join us this weekend for a zero-waste cooking class! Learn how to use every part of your ingredients and minimize food waste in your kitchen. Sign up now!",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 10,
          photo:
            "https://www.nj.com/personal-finance/static/a61d5443b3d41606c73a164045a93963/48efe/how-to-save-money.jpg",
          content:
            "Save money, reduce waste! With our food app, you can access exclusive sales and packages on surplus food, helping to promote sustainability while enjoying incredible flavors. 🌍💰🍽️ #SaveMoneyReduceWaste #SustainableFlavors",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 12,
          photo:
            "https://1.bp.blogspot.com/-OqYmaB9ScLs/YGrAe3OHIPI/AAAAAAAAZQM/-6tmWQBLlycCZWU1XDBAAMBf_xfa5xT_ACEwYBhgLKtQDAL1OcqwW5VrCLmwe8X5ny7OutDH_ysM6gILqtEI2o_k2sFFW-eyWKsKvwBhfGi-7SiSZo0VwzjoouQGQG723PaeMr7Nz0DWefDPSbcEhXqtkvZ7t2Lz1oUv8UPZiwdDUuhcAvBYTyzd5WukeQHv1XKf405laiu2hQRO6dakGQoRhvxR86sMvs_OUzIRm5qxBNqrMgcQ0aT0KqpqrXYVA_SptYQ2qzG3AGTq2k76JS2dr1PDsqwbB7sok91Cmh_6RqIvDNIEBk2kfZIPW1bw9F5OA1QiiWZfEMAx8q32IG8HFotNBIUXIx32fJTyGT0e8WVszvRkpef4b5Pkl6XRjw27XdVVn7CwTAx__oEeO9cGxxmsd54yrtTFmEZo0y2PNqPVs27TWcUr-1_WdTv9wlbH-yLpadNgrYIWe7SSy885Tkg8HdzGoxvQzNAXQ9MCFQmjio78qGrpsbWaZwszScfJl3tqJvfRlqt9V0mmDRjlUT8zaT7cBHlYiPNI9Qb6vwHHzaesmrfJun_0CV4KXjZWWDeg-_HJ5_-EzxULKXlz9jhoeTachc-_PJbeQSikHFnuiDvf3TrQAXHVeVfEyI3OS3os4tJ-Mas_Wj7Ut35mEjmjHMPKFq4MG/s2048/IMG_7139.JPG",
          content:
            "Calling all pastry lovers! Don't miss out on our bakery sale where you can indulge in heavenly treats at irresistible prices. 🥐🍰 #BakerySale #PastryLovers #SweetDeals",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 13,
          photo:
            "https://www.elegantthemes.com/blog/wp-content/uploads/2020/01/online-loyalty-program-examples.png",
          content:
            "Join our rewards program and unlock a world of benefits! From exclusive discounts to VIP treatment, your loyalty is rewarded every time you shop with us. 🎉💎 #RewardsProgram #ExclusiveBenefits #VIPTreatment",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 17,
          photo:
            "https://chengdu-expat.com/wp-content/uploads/2020/05/oos-1.png",
          content:
            "Supermarket extravaganza! Take advantage of our incredible sales to stock up on groceries and essentials, all while enjoying fantastic prices and quality. 🛒💥 #SupermarketSale #GroceryDeals #FantasticPrices",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 20,
          photo:
            "https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg",
          content:
            "Surplus food, extraordinary value! Discover our food app's special offers on surplus bakery, restaurant, and supermarket items, and enjoy high-quality products at unbeatable prices. 💥🥐🍕 #ExtraordinaryValue #SurplusFood",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 23,
          photo:
            "https://cdnjs.angroos.com/wp-content/uploads/2023/01/IMG_3058-scaled.jpg",
          content:
            "Unbox happiness with our special package offers! Discover curated bundles that bring together a variety of products, creating convenient and value-packed options. 🎁✨💥 #UnboxHappiness #SpecialPackages #ValuePacked",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 25,
          photo:
            "https://www.creativehatti.com/wp-content/uploads/edd/2021/05/Banner-design-for-delicious-pizza-sale-offer-06-large.jpg",
          content:
            "Experience culinary bliss at our restaurant sale, where delectable dishes are served with a side of savings! Gather your loved ones and savor the flavors. 🍽️💰 #RestaurantSale #CulinaryBliss #Savings",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("feeds", null, {});
  },
};
