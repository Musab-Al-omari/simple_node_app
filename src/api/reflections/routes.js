"use strict";
const express = require("express");
const { bearerOfTheAuth, paramsChecker } = require("../../middleware");
const router = new express.Router();

const controller = require("./controller");
const {createReflectionChecker, updateReflectionChecker} = require("../../middleware/bodyChecker");

router.use(bearerOfTheAuth);

router.post("/reflections", createReflectionChecker,controller.createReflectionController);

router.get("/reflections", controller.getAllReflectionController);

// router.use(paramsChecker);

router.get("/reflections/:id",paramsChecker, controller.getOneReflectionController);

router.put("/reflections/:id",paramsChecker, updateReflectionChecker,controller.updateReflectionController);

router.delete("/reflections/:id", paramsChecker ,controller.deleteReflectionController);

module.exports = router;
