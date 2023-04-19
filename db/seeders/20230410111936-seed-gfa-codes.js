"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "gfa_codes",
      [
        {
          authority_id: 1,
          header: "Test",
          content: "Test Content",
          url: "www.google.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Test2",
          content: "Test Content2",
          url: "www.google.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 1,
          header: "Test3",
          content: "Test Content3",
          url: "www.google.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("gfa_codes", null, {});
  },
};
