// packages
const { v4: uuIdv4 } = require("uuid");
const moment = require("moment");

// imports
const { pool: dataBase } = require("../../models/db");
const { hashPassword, generateToken, comparePassword } = require("../../utils");
const {
  createNewUserQuery,
  findUserByEmailQuery,
  deleteUserQuery,
} = require("./authQuery");

const createUser = async ({ password, email }) => {
  // find if the email is already in the database
  const { rows } = await dataBase.query(findUserByEmailQuery, [email]);

  if (rows.length > 0) {
    throw new Error("Email already in use");
  }
  const hashedPassword = hashPassword(password);
  const values = [
    uuIdv4(),
    email,
    hashedPassword,
    moment(new Date()),
    moment(new Date()),
  ];
  // add the user to  the database
  const res = await dataBase.query(createNewUserQuery, values);
  if (!res.rows) {
    throw new Error("Something went wrong");
  }
  const token = generateToken(res.rows[0].id);
  return token;
};
const loginNewUser = async (email, password) => {
  // find if the email is already in the database
  const { rows } = await dataBase.query(findUserByEmailQuery, [email]);

  if (rows.length == 0) {
    throw new Error("user not found");
  }
  const isValidPassword = comparePassword(password, rows[0].password);

  if (!isValidPassword) {
    throw new Error("invalid password");
  }
  const token = generateToken(rows[0].id);
  return token;
};
const deleteUser = async (id) => {
  const res = await dataBase.query(deleteUserQuery, [id]);

  console.log(res);
  if (res.rowCount == 0) {
    throw new Error("user not found");
  }
};

module.exports = { createUser, loginNewUser, deleteUser };
