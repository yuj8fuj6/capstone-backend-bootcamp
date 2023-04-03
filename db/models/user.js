"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.authority);
    }
  }
  User.init(
    {
      name: DataTypes.TEXT,
      dob: DataTypes.DATEONLY,
      gender: DataTypes.STRING,
      citizenship: DataTypes.STRING,
      residential_status: DataTypes.STRING,
      contact_no: DataTypes.INTEGER,
      email: DataTypes.STRING,
      professional_no: DataTypes.INTEGER,
      firm: DataTypes.STRING,
      designation: DataTypes.STRING,
      block_no: DataTypes.STRING,
      street_name: DataTypes.STRING,
      building_name: DataTypes.STRING,
      unit_no: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      photo_url: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    },
  );
  return User;
};
