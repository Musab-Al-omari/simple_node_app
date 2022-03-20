"use strict";
const statue = require("http-status-codes");
const {
  createReflection,
  getAllReflection,
  getOneReflection,
  updateReflection,
  deleteReflection,
} = require("../../services/reflectionService/reflectionService");

const createReflectionController = async (req, res) => {
  try {
    const result = await createReflection(req.body);
    res.status(statue.StatusCodes.OK).send({ result });
  } catch (error) {
    res.status(statue.StatusCodes.BAD_REQUEST).send({ err: error.message });
  }
};
const getAllReflectionController = async (req, res) => {
  try {
    const result = await getAllReflection(req.parseToken.id);
    res.status(statue.StatusCodes.OK).send({ result });
  } catch (error) {
    res.status(statue.StatusCodes.BAD_REQUEST).send({ err: error.message });
  }
};

const getOneReflectionController = async (req, res) => {
  try {
    const userId = req.parseToken.id;
    const reflectionId = req.params.id;
    const result = await getOneReflection(userId, reflectionId);
    res.status(statue.StatusCodes.OK).send({ result });
  } catch (error) {
    res.status(statue.StatusCodes.UNAUTHORIZED).send({ err: error.message });
  }
};
const updateReflectionController = async (req, res) => {
  try {
    const userId = req.parseToken.id;
    const reflectionId = req.params.id;
    const result = await updateReflection(userId, reflectionId, req.body);
    res.status(statue.StatusCodes.OK).send({ result });
  } catch (error) {
    res.status(statue.StatusCodes.UNAUTHORIZED).send({ err: error.message });
  }
};
const deleteReflectionController = async (req, res) => {
  try {
    const userId = req.parseToken.id;
    const reflectionId = req.params.id;
    await deleteReflection(userId, reflectionId);
    res.status(statue.StatusCodes.OK).send({ message: "Reflection deleted" });
  } catch (error) {
    res.status(statue.StatusCodes.BAD_REQUEST).send({ err: error.message });
  }
};

module.exports = {
  createReflectionController,
  getAllReflectionController,
  getOneReflectionController,
  updateReflectionController,
  deleteReflectionController,
};
