"use strict";
const statue = require("http-status-codes");
const {
  createUser,
  loginNewUser,
  deleteUser
} = require("../../services/authService/authService");

const loginController = async (req, res) => {
  try {
    const token = await loginNewUser(req.email, req.password);
    res.status(statue.StatusCodes.OK).send({ token });
  } catch (error) {
    res.status(statue.StatusCodes.UNAUTHORIZED).send({ err: error.message });
  }
};
const signUpController = async (req, res) => {
  try {
    const token = await createUser(req.body);
    res.status(statue.StatusCodes.CREATED).send({ token });
  } catch (error) {
    res.status(statue.StatusCodes.UNAUTHORIZED).send({ err: error.message });
  }
};
const deleteUserController = async (req, res) => {
  try {
    await deleteUser(req.parseToken.id);
    res.status(statue.StatusCodes.ACCEPTED).send({ message: "deleted" });
  } catch (error) {
    res.status(statue.StatusCodes.NOT_FOUND).send({ err: error.message });
  }
};

module.exports = {
  loginController,
  signUpController,
  deleteUserController,
};
