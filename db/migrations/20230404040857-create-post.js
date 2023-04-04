"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      agency_id: {
        type: Sequelize.INTEGER,
        references: { model: "authorities", key: "id" },
      },
      code: {
        type: Sequelize.STRING,
      },
      clause: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },
      upvote: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.UUID,
        references: { model: "users", key: "id" },
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
    await queryInterface.dropTable("posts");
  },
};
