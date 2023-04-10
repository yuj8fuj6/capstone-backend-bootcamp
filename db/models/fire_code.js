"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fire_code extends Model {
    static associate(models) {
      this.belongsTo(models.authority);
    }
  }
  Fire_code.init(
    {
      authority_id: {
        type: DataTypes.INTEGER,
        references: { model: "authority", key: "id" },
      },
      chapter: DataTypes.STRING,
      clause_no: DataTypes.STRING,
      content: DataTypes.TEXT,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "fire_code",
      underscored: true,
    },
  );
  return Fire_code;
};