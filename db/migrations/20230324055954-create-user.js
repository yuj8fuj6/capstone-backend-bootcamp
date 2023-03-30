"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
      },
      name: {
        type: Sequelize.TEXT,
      },
      dob: {
        type: Sequelize.DATEONLY,
      },
      gender: {
        type: Sequelize.STRING,
      },
      citizenship: {
        type: Sequelize.STRING,
      },
      residential_status: {
        type: Sequelize.STRING,
      },
      contact_no: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      professional_no: {
        type: Sequelize.INTEGER,
      },
      firm: {
        type: Sequelize.STRING,
      },
      designation: {
        type: Sequelize.STRING,
      },
      block_no: {
        type: Sequelize.STRING,
      },
      street_name: {
        type: Sequelize.STRING,
      },
      building_name: {
        type: Sequelize.STRING,
      },
      unit_no: {
        type: Sequelize.STRING,
      },
      postal_code: {
        type: Sequelize.STRING,
      },
      photo_url: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("users");
  },
};
