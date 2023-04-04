"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Authority extends Model {
    static associate(models) {
      this.belongsTo(models.user);
    }
  }
  Authority.init(
    {
      name: DataTypes.STRING,
      acronym: DataTypes.STRING,
      logo_url: DataTypes.STRING,
      admin_id: {
        type: DataTypes.UUID,
        references: { model: "user", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "authority",
      underscored: true,
      timestamps: false,
    },
  );
  return Authority;
};
