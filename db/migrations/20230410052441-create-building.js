"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("buildings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      building_type: {
        type: Sequelize.STRING,
      },
      ura_category: {
        type: Sequelize.STRING,
      },
      scdf_category: {
        type: Sequelize.STRING,
      },
      usage: {
        type: Sequelize.STRING,
      },
      floor_no: {
        type: Sequelize.INTEGER,
      },
      basement_floor_no: {
        type: Sequelize.INTEGER,
      },
      building_height: {
        type: Sequelize.DECIMAL,
      },
      avg_floor_height: {
        type: Sequelize.DECIMAL,
      },
      gfa: {
        type: Sequelize.DECIMAL,
      },
      site_area: {
        type: Sequelize.DECIMAL,
      },
      plot_ratio: {
        type: Sequelize.DECIMAL,
      },
      site_coverage: {
        type: Sequelize.INTEGER,
      },
      habitable_height: {
        type: Sequelize.DECIMAL,
      },
      postal_code: {
        type: Sequelize.STRING,
      },
      block_no: {
        type: Sequelize.STRING,
      },
      street_name: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.UUID,
        references: { model: "users", key: "id" },
      },
      model_building_id: {
        type: Sequelize.INTEGER,
        references: { model: "model_buildings", key: "id" },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("buildings");
  },
};
