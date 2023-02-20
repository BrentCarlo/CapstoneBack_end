const express = require("express");
const router = express.Router();
const controller = require("../controllers/userProfileConttroller");

router.get("/user_profile", controller.getUserProfile);

module.exports = router;
