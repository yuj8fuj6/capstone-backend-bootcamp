"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("thread_upvotes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      upvote: {
        type: Sequelize.BOOLEAN,
      },
      thread_id: {
        type: Sequelize.INTEGER,
        references: { model: "threads", key: "id" },
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
    await queryInterface.dropTable("thread_upvotes");
  },
};
