"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "fire_code_model_buildings",
      [
        {
          code_id: 1,
          building_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 2,
          building_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 3,
          building_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fire_code_model_buildings", null, {});
  },
};
