"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("talents", [
      {
        first_name: "Spidey",
        last_name: "boy",
        email: "kid2010@text.com",
      },
      {
        first_name: "Genz",
        last_name: "Goose",
        email: "goosegoose@text.com",
      },
      {
        first_name: "Cat",
        last_name: "Dog",
        email: "bestpetever@text.com",
      },
    ]);

    await queryInterface.bulkInsert("employers", [
      {
        first_name: "Tony",
        last_name: "Stark",
        company_name: "Avengers",
        description:
          "The Avengers is a team of extraordinary individuals assembled to protect the world from threats beyond the capabilities of conventional military and law enforcement agencies. Comprised of some of the most powerful heroes on Earth, The Avengers stand as the first line of defense against global and interstellar dangers.",
        mission_statement:
          "To safeguard humanity and maintain peace by uniting the world’s greatest heroes against any threat, no matter how formidable.",
        headquarters: "Avengers Tower, New York City, NY",
        phone: 2484345508,
        email: "tonystark@test.com",
      },
      {
        first_name: "Widow",
        last_name: "Black",
        company_name: "Red Room",
        description:
          "The Red Room is a covert espionage and assassination program that operates in the shadows, training elite spies and assassins for high-stakes missions. Known for its rigorous training regimen and psychological manipulation, The Red Room has produced some of the world’s most dangerous operatives.",
        mission_statement:
          "To achieve strategic superiority through the deployment of expertly trained and highly skilled operatives capable of executing the most critical and covert missions.",
        headquarters: "Everywhere",
        phone: 2484345508,
        email: "blackwidow@text.com",
      },
      {
        first_name: "Hulk",
        last_name: "Green",
        company_name: "Avengers",
        description:
          "The Avengers is a team of extraordinary individuals assembled to protect the world from threats beyond the capabilities of conventional military and law enforcement agencies. Comprised of some of the most powerful heroes on Earth, The Avengers stand as the first line of defense against global and interstellar dangers.",
        mission_statement:
          "To safeguard humanity and maintain peace by uniting the world’s greatest heroes against any threat, no matter how formidable.",
        headquarters: "Avengers Tower, New York City, NY",
        phone: 2484345508,
        email: "blackwidow@text.com",
      },
      {
        first_name: "Elon",
        last_name: "Musk",
        company_name: "Tesla",
        description:
          "Tesla is a company that specializes in electric vehicles, energy storage solutions, and renewable energy products. Tesla aims to accelerate the world's transition to sustainable energy with innovative products and technologies.",
        mission_statement:
          "To accelerate the world's transition to sustainable energy.",
        headquarters: "Palo Alto, CA",
        phone: 6506815000,
        email: "elonmusk@tesla.com",
      },
      {
        first_name: "Jeff",
        last_name: "Bezos",
        company_name: "Amazon",
        description:
          "Amazon is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence. Known for its disruption of well-established industries, Amazon is one of the world's most valuable brands.",
        mission_statement:
          "To be Earth's most customer-centric company, where customers can find and discover anything they might want to buy online.",
        headquarters: "Seattle, WA",
        phone: 2062661000,
        email: "jeffbezos@amazon.com",
      },
      {
        first_name: "Satya",
        last_name: "Nadella",
        company_name: "Microsoft",
        description:
          "Microsoft is a leading global technology company that develops, manufactures, licenses, supports, and sells a range of software products, services, and devices. It is known for its software products like Windows, Office, and Azure.",
        mission_statement:
          "To empower every person and every organization on the planet to achieve more.",
        headquarters: "Redmond, WA",
        phone: 4258828080,
        email: "satyanadella@microsoft.com",
      },
      {
        first_name: "Sundar",
        last_name: "Pichai",
        company_name: "Google",
        description:
          "Google is a global leader in technology, specializing in internet-related services and products, including online advertising technologies, a search engine, cloud computing, software, and hardware.",
        mission_statement:
          "To organize the world's information and make it universally accessible and useful.",
        headquarters: "Mountain View, CA",
        phone: 6502530000,
        email: "sundarpichai@google.com",
      },
      {
        first_name: "Tim",
        last_name: "Cook",
        company_name: "Apple",
        description:
          "Apple Inc. is a multinational technology company that designs, manufactures, and markets consumer electronics, computer software, and online services. Known for its innovative products like the iPhone, iPad, and Mac computers.",
        mission_statement:
          "To bring the best user experience to its customers through its innovative hardware, software, and services.",
        headquarters: "Cupertino, CA",
        phone: 4089961010,
        email: "timcook@apple.com",
      },
      {
        first_name: "Mark",
        last_name: "Zuckerberg",
        company_name: "Facebook",
        description:
          "Facebook is a leading social media and technology company that offers online social networking services. It aims to give people the power to build community and bring the world closer together.",
        mission_statement:
          "To give people the power to build community and bring the world closer together.",
        headquarters: "Menlo Park, CA",
        phone: 6505434800,
        email: "markzuckerberg@facebook.com",
      },
    ]);

    await queryInterface.bulkInsert("benefits", [
      {
        category: "Meaningful Impact",
        description:
          "Cultivate personal fulfilment by contributing to a purpose-driven organisation, creating a positive impact that extends beyond the confines of the workplace.",
      },
      {
        category: "Harmony in Life and Work",
        description:
          "Achieving a harmonious balance between personal and professional life promotes well-being and contentment for all involved.",
      },
      {
        category: "Professional Advancement",
        description:
          "Unlock continuous pathways for career growth, providing opportunities for individuals to progress and excel in their chosen fields.",
      },
      {
        category: "Competitive Compensation",
        description:
          "Receive equitable and competitive compensation packages, ensuring financial security and acknowledgement for valuable contributions in the dynamic job market.",
      },
      {
        category: "Stability and Assurance",
        description:
          "Establish a foundation of job security, creating a stable environment for organisational growth and individual flourishing in a secure professional space.",
      },
      {
        category: "Inclusive Workplace Culture",
        description:
          "Embrace diversity and nurture a company culture that values inclusivity, fostering a collaborative environment that attracts and retains a rich tapestry of talents.",
      },
      {
        category: "Flexible Work Arrangements",
        description:
          "Tailor work setups to accommodate diverse needs, promoting flexibility in the workplace to enhance productivity and job satisfaction.",
      },
      {
        category: "Guidance and Continuous Learning:",
        description:
          "Access mentorship and a spectrum of learning opportunities for continuous personal and professional development, empowering growth for individuals at all career stages.",
      },
      {
        category: "Holistic Well-being Support",
        description:
          "Prioritise health and overall well-being through comprehensive support systems, including insurance, ensuring the holistic welfare of everyone involved.",
      },
      {
        category: "Community Impact and Social Responsibility",
        description:
          "Contribute to a broader social impact by aligning with organisations that make a positive difference.",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("talents");
    await queryInterface.dropTable("employers");
    await queryInterface.dropTable("benefits");
  },
};
