"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Thread_upvote extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.post);
    }
  }
  Thread_upvote.init(
    {
      upvote: DataTypes.BOOLEAN,
      thread_id: {
        type: DataTypes.INTEGER,
        references: { model: "thread", key: "id" },
      },
      user_id: {
        type: DataTypes.UUID,
        references: { model: "user", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "thread_upvote",
      underscored: true,
    },
  );
  return Thread_upvote;
};
