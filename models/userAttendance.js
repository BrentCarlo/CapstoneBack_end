"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const instance = require("../dbconnection");
const UserAttendance = instance.sequelize.define(
  "userattendances",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userid: {
      type: Sequelize.INTEGER
    },
    location: {
      type: Sequelize.STRING
    },
    verifylocation: {
      type: Sequelize.STRING
    },
    remarks: {
      type: Sequelize.STRING
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "userattendances",
  }
);

exports.model = UserAttendance;
