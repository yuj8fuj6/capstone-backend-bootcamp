"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post_upvote extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.post);
    }
  }
  Post_upvote.init(
    {
      upvote: DataTypes.BOOLEAN,
      post_id: {
        type: DataTypes.INTEGER,
        references: { model: "post", key: "id" },
      },
      user_id: {
        type: DataTypes.UUID,
        references: { model: "user", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "post_upvote",
      underscored: true,
    },
  );
  return Post_upvote;
};
