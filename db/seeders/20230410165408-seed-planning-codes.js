"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "planning_codes",
      [
        {
          authority_id: 1,
          header: "Test",
          content: "Test Content",
          url: "www.google.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("planning_codes", null, {});
  },
};
