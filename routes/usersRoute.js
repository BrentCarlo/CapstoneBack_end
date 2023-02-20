const express = require("express");
const router = express.Router();
const controller = require("../controllers/userControllers");

// Login

router.post("/login", controller.login);

// router.get("/login", controller.login);

module.exports = router;
