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
          code_id: 1,
          building_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 1,
          building_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 1,
          building_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 1,
          building_id: 7,
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
          code_id: 2,
          building_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 2,
          building_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 2,
          building_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 2,
          building_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 2,
          building_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 2,
          building_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 3,
          building_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 3,
          building_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 3,
          building_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 3,
          building_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 3,
          building_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 4,
          building_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 4,
          building_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 4,
          building_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 4,
          building_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 4,
          building_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 5,
          building_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 5,
          building_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 5,
          building_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 5,
          building_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code_id: 5,
          building_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // {
        //   code_id: 6,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 6,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 6,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 7,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 7,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 7,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 8,
        //   building_id: 4,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 8,
        //   building_id: 5,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 8,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 9,
        //   building_id: 4,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 9,
        //   building_id: 5,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 10,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 11,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 12,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 13,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 13,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 13,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 13,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 13,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 14,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 14,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 14,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 14,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 14,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 15,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 15,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 15,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 15,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 15,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 16,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 16,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 16,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 16,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 16,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 17,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 17,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 17,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 17,
        //   building_id: 4,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 17,
        //   building_id: 5,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 17,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 17,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 18,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 18,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 19,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 19,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 20,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 20,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 21,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 21,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 21,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 21,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 21,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 22,
        //   building_id: 5,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 23,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 23,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 23,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 23,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 23,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 24,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 24,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 24,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 24,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 24,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 25,
        //   building_id: 1,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 25,
        //   building_id: 2,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 25,
        //   building_id: 3,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 25,
        //   building_id: 6,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
        // {
        //   code_id: 25,
        //   building_id: 7,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        // },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fire_code_model_buildings", null, {});
  },
};
