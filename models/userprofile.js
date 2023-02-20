"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const instance = require("../dbconnection");
const profile = instance.sequelize.define(
  "userprofiles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.STRING,
    },
    birthdate: {
      type: DataTypes.DATE,
    },
    joinedOn: {
      type: DataTypes.DATE,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "userprofiles",
  }
);

exports.model = profile;
