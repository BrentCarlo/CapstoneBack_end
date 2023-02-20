const express = require("express");
const router = express.Router();
const controller = require("../controllers/userAttendanceControllers");


router.get("/user_attendance", controller.getUserattendance);

router.post("/user_attendance", controller.insertUserattendance);