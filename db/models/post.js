"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.authority);
      this.hasMany(models.post_upvote);
    }
  }
  Post.init(
    {
      authority_id: {
        type: DataTypes.INTEGER,
        references: { model: "authority", key: "id" },
      },
      code: DataTypes.STRING,
      clause: DataTypes.STRING,
      content: DataTypes.TEXT,
      upvote: DataTypes.INTEGER,
      user_id: {
        type: DataTypes.UUID,
        references: { model: "user", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "post",
      underscored: true,
    },
  );
  return Post;
};
