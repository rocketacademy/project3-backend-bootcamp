"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "chapters",
      [
        {
          name: "welcome to bootcamp",
          chapter_index: 0,
          sectionId: 1,
          markdown_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_the_First_Galactic_Empire.svg/600px-Flag_of_the_First_Galactic_Empire.svg.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "logistics",
          chapter_index: 0,
          sectionId: 2,
          markdown_url:
            "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "general reference",
          chapter_index: 0,
          sectionId: 3,
          markdown_url:
            "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "foundations",
          chapter_index: 0,
          sectionId: 4,
          markdown_url:
            "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "command line",
          chapter_index: 1,
          sectionId: 4,
          markdown_url:
            "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "git",
          chapter_index: 2,
          sectionId: 4,
          markdown_url:
            "https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "github",
          chapter_index: 3,
          sectionId: 4,
          markdown_url:
            "https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "javascript",
          chapter_index: 4,
          sectionId: 4,
          markdown_url:
            "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "nodejs",
          chapter_index: 5,
          sectionId: 4,
          markdown_url:
            "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "frontend",
          chapter_index: 0,
          sectionId: 5,
          markdown_url:
            "https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1_Frontend.md",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "html",
          chapter_index: 1,
          sectionId: 5,
          markdown_url:
            "https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.1_HTML.md",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "css",
          chapter_index: 2,
          sectionId: 5,
          markdown_url:
            "https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.2_CSS.md",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "layout",
          chapter_index: 3,
          sectionId: 5,
          markdown_url:
            "https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.2.1_Layout.md",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "react",
          chapter_index: 4,
          sectionId: 5,
          markdown_url:
            "https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.3_React.md",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "recipe site",
          chapter_index: 5,
          sectionId: 5,
          markdown_url:
            "https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.E.1_RecipeSite.md",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "portfolio page",
          chapter_index: 6,
          sectionId: 5,
          markdown_url:
            "https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.E.2_PortfolioPage.md",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "world clock",
          chapter_index: 7,
          sectionId: 5,
          markdown_url:
            "https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.E.3_WorldClock.md",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "high card",
          chapter_index: 8,
          sectionId: 5,
          markdown_url:
            "https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.E.4_HighCard.md",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "guess the word",
          chapter_index: 9,
          sectionId: 5,
          markdown_url:
            "https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.E.5_GuessTheWord.md",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("chapters", null, {});
  },
};
