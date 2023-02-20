const User = require('../models/users').model
const jwt = require("jsonwebtoken");


exports.login = async (req, res) => {

  const users = await User.findAll({
      username: req.body.username,
   } )

  res.send(users);

 
};
