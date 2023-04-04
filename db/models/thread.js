"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.post);
      this.hasMany(models.thread_upvote);
    }
  }
  Thread.init(
    {
      content: DataTypes.TEXT,
      user_id: {
        type: DataTypes.UUID,
        references: { model: "user", key: "id" },
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: { model: "post", key: "id" },
      },
      upvote: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "thread",
      underscored: true,
    },
  );
  return Thread;
};
