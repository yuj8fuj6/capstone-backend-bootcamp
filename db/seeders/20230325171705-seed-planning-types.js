"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "planning_types",
      [
        {
          postal_code: "639401",
          address: "3 TUAS SOUTH AVENUE 2",
          land_use: "BUSINESS 2",
          gross_floor_area: "1,975.63 sqm",
          gross_plot_ratio: "1.0",
          site_area: "53,622 sqm",
          building_height: "50.1m SHD",
          building_height_control: "-",
          no_of_dwelling_units: 0,
        },
        {
          postal_code: "258404",
          address: "30 NASSIM ROAD",
          land_use: "RESIDENTIAL",
          gross_floor_area: "2,928.78 sqm",
          gross_plot_ratio:
            "GPR of landed houses is resultant of the allowable building envelope",
          site_area: "2,987.7 sqm",
          building_height: "34.95m SHD",
          building_height_control: "Maximum 2 storey",
          no_of_dwelling_units: 1,
        },
        {
          postal_code: "258441",
          address: "52A NASSIM ROAD",
          land_use: "RESIDENTIAL",
          gross_floor_area: "1,171.65 sqm",
          gross_plot_ratio:
            "GPR of landed houses is resultant of the allowable building envelope",
          site_area: "1,371.4 sqm",
          building_height: "30.85m SHD",
          building_height_control: "Maximum 2 storey",
          no_of_dwelling_units: 1,
        },
        {
          postal_code: "638049",
          address: "7 TUAS SOUTH STREET 3",
          land_use: "BUSINESS 2",
          gross_floor_area: "4,830.33 sqm",
          gross_plot_ratio: "1.4",
          site_area: "7,171.9 sqm",
          building_height: "19.29m SHD",
          building_height_control: "Subject to detailed evaluation",
          no_of_dwelling_units: 0,
        },
        {
          postal_code: "758214",
          address: "28 SENOKO DRIVE",
          land_use: "BUSINESS 2",
          gross_floor_area: "16,061 sqm",
          gross_plot_ratio: "2.5",
          site_area: "20,070.9 sqm",
          building_height: "-",
          building_height_control: "Subject to detailed evaluation",
          no_of_dwelling_units: 0,
        },
        {
          postal_code: "279621",
          address: "170 GHIM MOH ROAD",
          land_use: "CIVIC & COMMUNITY INSTITUTION",
          gross_floor_area: "16,542.76 sqm",
          gross_plot_ratio: "Subject to detailed evaluation",
          site_area: "6,300 sqm",
          building_height: "66.7m SHD",
          building_height_control: "Subject to detailed evaluation",
          no_of_dwelling_units: 0,
        },
        {
          postal_code: "159053",
          address: "20 LENGKOK BAHRU",
          land_use: "EDUCATIONAL INSTITUTION",
          gross_floor_area: "4,659.43 sqm",
          gross_plot_ratio: "Subject to detailed evaluation",
          site_area: "2,324.08 sqm",
          building_height: "31.16m SHD",
          building_height_control: "Subject to detailed evaluation",
          no_of_dwelling_units: 0,
        },
        {
          postal_code: "479220",
          address: "180 BEDOK RESERVOIR ROAD",
          land_use: "CIVIC & COMMUNITY INSTITUTION",
          gross_floor_area: "5,999.28 sqm",
          gross_plot_ratio: "Subject to detailed evaluation",
          site_area: "3,999.54 sqm",
          building_height: "36.14m SHD",
          building_height_control: "Subject to detailed evaluation",
          no_of_dwelling_units: 0,
        },
        {
          postal_code: "248618",
          address: "15 PEEL ROAD",
          land_use: "RESIDENTIAL",
          gross_floor_area: "1,735.89 sqm",
          gross_plot_ratio:
            "GPR of landed houses is resultant of the allowable building envelope",
          site_area: "3,010.2 sqm",
          building_height: "21.1m SHD",
          building_height_control: "Maximum 2 storey",
          no_of_dwelling_units: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("planning_types", null, {});
  },
};
