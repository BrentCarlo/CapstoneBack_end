const UserProfile = require("../models/userprofile").model;
const jwt = require('jsonwebtoken')

exports.getUserProfile = async (req, res) => {
  const userprofile = await UserProfile.findAll({
  });
  res.send(userprofile);
};
