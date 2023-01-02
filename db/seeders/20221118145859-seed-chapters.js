'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'chapters',
      [
        {
          name: 'Welcome To Bootcamp',
          chapterIndex: 0,
          sectionId: 1,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Logistics',
          chapterIndex: 0,
          sectionId: 2,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/logistics/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Course Schedules',
          chapterIndex: 1,
          sectionId: 2,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/logistics/course-schedules.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Course Methodology',
          chapterIndex: 2,
          sectionId: 2,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/logistics/course-methodology.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Required Software',
          chapterIndex: 3,
          sectionId: 2,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/logistics/required-software.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'LinkedIn Education Badge',
          chapterIndex: 4,
          sectionId: 2,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/logistics/linkedin-education-badge.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'General Reference',
          chapterIndex: 0,
          sectionId: 3,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/general-reference/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Naming, Casing, and Commenting Conventions',
          chapterIndex: 1,
          sectionId: 3,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/general-reference/vs-code-tips.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'VS Code Tips',
          chapterIndex: 2,
          sectionId: 3,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/general-reference/vs-code-tips.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Recommended Resources',
          chapterIndex: 3,
          sectionId: 3,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/general-reference/recommended-resources.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Foundations',
          chapterIndex: 0,
          sectionId: 4,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/0-foundations/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Command Line',
          chapterIndex: 1,
          sectionId: 4,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/0-foundations/0.1-command-line.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Git',
          chapterIndex: 2,
          sectionId: 4,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/0-foundations/0.2-git/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'GitHub',
          chapterIndex: 3,
          sectionId: 4,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/0-foundations/0.3-github/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'JavaScript',
          chapterIndex: 4,
          sectionId: 4,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/0-foundations/0.4-javascript/0.4.1-es6.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Node.js',
          chapterIndex: 5,
          sectionId: 4,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/0-foundations/0.5-node.js/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Frontend',
          chapterIndex: 0,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1_Frontend.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'HTML',
          chapterIndex: 1,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.1_HTML.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CSS',
          chapterIndex: 2,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.2_CSS.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Layout',
          chapterIndex: 3,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.2.1_Layout.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'React',
          chapterIndex: 4,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.3_React.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Recipe Site',
          chapterIndex: 5,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.E.1_RecipeSite.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Portfolio Page',
          chapterIndex: 6,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.E.2_PortfolioPage.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'World Clock',
          chapterIndex: 7,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.E.3_WorldClock.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'High Card',
          chapterIndex: 8,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.E.4_HighCard.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Guess The Word',
          chapterIndex: 9,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.E.5_GuessTheWord.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 1: Frontend App',
          chapterIndex: 10,
          sectionId: 5,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Full Stack',
          chapterIndex: 0,
          sectionId: 6,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/2-full-stack/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Advanced React',
          chapterIndex: 1,
          sectionId: 6,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/2-full-stack/2.2-advanced-react/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Firebase',
          chapterIndex: 2,
          sectionId: 6,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/2-full-stack/2.3-firebase/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Exercises',
          chapterIndex: 3,
          sectionId: 6,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/2-full-stack/2.e-exercises/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 2: Full-Stack App (Firebase)',
          chapterIndex: 4,
          sectionId: 6,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/2-full-stack/2.p-full-stack-app-firebase.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Backend',
          chapterIndex: 0,
          sectionId: 7,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Express',
          chapterIndex: 1,
          sectionId: 7,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/3.1-express.js/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SQL',
          chapterIndex: 2,
          sectionId: 7,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Sequelize',
          chapterIndex: 3,
          sectionId: 7,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Authentication',
          chapterIndex: 4,
          sectionId: 7,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Application Deployment',
          chapterIndex: 5,
          sectionId: 7,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Exercises',
          chapterIndex: 6,
          sectionId: 7,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 3: Full-Stack App (Express)',
          chapterIndex: 7,
          sectionId: 7,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Capstone',
          chapterIndex: 0,
          sectionId: 8,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Testing',
          chapterIndex: 1,
          sectionId: 8,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Continuous Integration',
          chapterIndex: 2,
          sectionId: 8,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Typescript',
          chapterIndex: 3,
          sectionId: 8,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Security',
          chapterIndex: 4,
          sectionId: 8,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 4: Capstone',
          chapterIndex: 5,
          sectionId: 8,
          markdownUrl:
            'https://raw.githubusercontent.com/rocketacademy/bootcamp3.0-docs/main/3-backend/README.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Algorithms',
          chapterIndex: 0,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Arrays',
          chapterIndex: 1,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hash Tables',
          chapterIndex: 2,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Stacks',
          chapterIndex: 3,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Queues',
          chapterIndex: 4,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Linked Lists',
          chapterIndex: 5,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Trees',
          chapterIndex: 6,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Graphs',
          chapterIndex: 7,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Heaps',
          chapterIndex: 8,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Complexity Analysis',
          chapterIndex: 9,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Object-Oriented Programming',
          chapterIndex: 10,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Recursion',
          chapterIndex: 11,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dynamic Programming',
          chapterIndex: 12,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bit Manipulation',
          chapterIndex: 13,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Python',
          chapterIndex: 14,
          sectionId: 9,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Interview Prep',
          chapterIndex: 0,
          sectionId: 10,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Job Application Strategy',
          chapterIndex: 1,
          sectionId: 10,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Resume',
          chapterIndex: 2,
          sectionId: 10,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Portfolio',
          chapterIndex: 3,
          sectionId: 10,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Job List',
          chapterIndex: 4,
          sectionId: 10,
          markdownUrl:
            'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.P_FrontendApp.md',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chapters', null, {});
  },
};
