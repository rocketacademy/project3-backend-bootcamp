'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'posts',
      [
        {
          author: 1,
          authorName: 'Adam',
          authorImage:
            'https://img1.ak.crunchyroll.com/i/spire1/9ba7326ca5b194a03dcdf6e2c1609bc51652761752_large.jpg',
          chapterId: 1,
          content: '<p>Start of Bootcamp!!</p>',
          views: null,
          upvotes: null,
          time: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: 2,
          authorName: 'Jermaine',
          authorImage:
            'https://static.wikia.nocookie.net/gundam/images/3/3f/Relena_Peacecraft.png',
          chapterId: 1,
          content: '<p>Woots!!</p>',
          views: null,
          upvotes: null,
          time: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: 1,
          authorName: 'Adam',
          authorImage:
            'https://img1.ak.crunchyroll.com/i/spire1/9ba7326ca5b194a03dcdf6e2c1609bc51652761752_large.jpg',
          chapterId: 17,
          content: '<p>Excited to start this Chapter!</p>',
          views: null,
          upvotes: null,
          time: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: 2,
          authorName: 'Jermaine',
          authorImage:
            'https://static.wikia.nocookie.net/gundam/images/3/3f/Relena_Peacecraft.png',
          chapterId: 17,
          content: '<p>Yeah!!</p>',
          views: null,
          upvotes: null,
          time: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: 3,
          authorName: 'Wei Yu',
          authorImage:
            'https://www.giantbomb.com/a/uploads/square_small/1/12165/359555-heero_yuy.jpg',
          chapterId: 1,
          content: '<p><strong>LETS GO......</strong></p>',
          views: null,
          upvotes: null,
          time: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: 3,
          authorName: 'Wei Yu',
          authorImage:
            'https://www.giantbomb.com/a/uploads/square_small/1/12165/359555-heero_yuy.jpg',
          chapterId: 17,
          content: '<p>CSS can be quite a <strong>headache......</strong></p>',
          views: null,
          upvotes: null,
          time: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: 1,
          authorName: 'Adam',
          authorImage:
            'https://img1.ak.crunchyroll.com/i/spire1/9ba7326ca5b194a03dcdf6e2c1609bc51652761752_large.jpg',
          chapterId: 18,
          content: '<p>HTML is an interesting way to structure a web page!</p>',
          views: null,
          upvotes: null,
          time: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: 2,
          authorName: 'Jermaine',
          authorImage:
            'https://static.wikia.nocookie.net/gundam/images/3/3f/Relena_Peacecraft.png',
          chapterId: 18,
          content: '<p>a lot of tags to remember!</p>',
          views: null,
          upvotes: null,
          time: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: 3,
          authorName: 'Wei Yu',
          authorImage:
            'https://www.giantbomb.com/a/uploads/square_small/1/12165/359555-heero_yuy.jpg',
          chapterId: 18,
          content: '<p>wait till we reach Javascript!</p>',
          views: null,
          upvotes: null,
          time: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('appointments', null, {});
  },
};
