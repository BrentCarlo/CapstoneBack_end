"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const instance = require("../dbconnection");
const Users = instance.sequelize.define(
  "users",
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        require:true
      },
      password: {
        type: DataTypes.STRING,
        require:true
      },
    },
    {
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      tableName: "users",
    }
);

exports.model = Users;