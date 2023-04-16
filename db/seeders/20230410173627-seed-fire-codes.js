"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "fire_codes",
      [
        {
          authority_id: 3,
          chapter: "2",
          clause_no: "1.2",
          content: "Test",
          url: "www.google.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fire_codes", null, {});
  },
};
