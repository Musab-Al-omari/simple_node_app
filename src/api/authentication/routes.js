"use strict";
const express = require("express");
const { createUserBodyChecker } = require("../../middleware/bodyChecker");
const { basic, bearerOfTheAuth } = require("../../middleware");
const router = new express.Router();

const controller = require("./controller");

router.post("/login", basic, controller.loginController);

router.post("/signup", createUserBodyChecker, controller.signUpController);

router.delete("/deleteUser", bearerOfTheAuth, controller.deleteUserController);

module.exports = router;
