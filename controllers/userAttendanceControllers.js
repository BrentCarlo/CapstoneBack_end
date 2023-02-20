const UserAttendance = require('../models/userAttendance').model
const jwt = require("jsonwebtoken");


exports.getUserattendance = async (req, res) => {

    const attendance = await UserAttendance.findAll({
    })
    res.send(attendance);
   
  };
  
  exports.insertUserattendance = async(req,res) => {
    const insertAttendance = await UserAttendance.create({})
    res.send(insertAttendance);
  }

  exports.uploadSelfie = async (req,res) => {
    res.send({message: 'upload success'})
  }