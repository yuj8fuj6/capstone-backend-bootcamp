"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Building_code extends Model {
    static associate(models) {
      this.belongsTo(models.authority);
    }
  }
  Building_code.init(
    {
      authority_id: {
        type: DataTypes.INTEGER,
        references: { model: "authority", key: "id" },
      },
      chapter: DataTypes.STRING,
      clause_no: DataTypes.STRING,
      content: DataTypes.TEXT,
      page_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "building_code",
      underscored: true,
    },
  );
  return Building_code;
};
