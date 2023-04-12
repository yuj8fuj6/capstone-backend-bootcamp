"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Gfa_code extends Model {
    static associate(models) {
      this.belongsTo(models.authority);
      this.belongsToMany(models.model_building, {
        through: "gfa_code_model_buildings",
      });
    }
  }
  Gfa_code.init(
    {
      authority_id: {
        type: DataTypes.INTEGER,
        references: { model: "authority", key: "id" },
      },
      header: DataTypes.TEXT,
      content: DataTypes.TEXT,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "gfa_code",
      underscored: true,
    },
  );
  return Gfa_code;
};
