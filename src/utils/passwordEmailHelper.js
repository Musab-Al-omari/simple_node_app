const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

const comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

module.exports = { hashPassword, comparePassword, isValidEmail };
