"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "model_buildings",
      [
        {
          building_type: "Industrial",
          ura_category: "Business 2 (Industrial)",
          scdf_category: "VI - Factory",
          usage: "Factory with Ancillary Offices",
          floor_no: "[1, 5]",
          basement_floor_no: "[0, 1]",
          building_height: "[3.0, 15.0]",
          avg_floor_height: "[2.4, 4.0]",
          gfa: "[0.0, 2000.0]",
          site_area: "[0.0, 4000.0]",
          plot_ratio: "[0.0, 1.0]",
          site_coverage: "[0, 35]",
          habitable_height: "[0.0, 24.0]",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("model_buildings", null, {});
  },
};
