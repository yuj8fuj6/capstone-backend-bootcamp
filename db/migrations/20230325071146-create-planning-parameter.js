"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("planning_parameters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      decision_date: {
        type: Sequelize.TEXT,
      },
      address: {
        type: Sequelize.TEXT,
      },
      submission_desc: {
        type: Sequelize.TEXT,
      },
      decision_type: {
        type: Sequelize.TEXT,
      },
      appl_type: {
        type: Sequelize.TEXT,
      },
      deleted_ind: {
        type: Sequelize.TEXT,
      },
      mkts_lotno: {
        type: Sequelize.TEXT,
      },
      dr_id: {
        type: Sequelize.TEXT,
      },
      submission_no: {
        type: Sequelize.TEXT,
      },
      decision_no: {
        type: Sequelize.TEXT,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("planning_parameters");
  },
};
