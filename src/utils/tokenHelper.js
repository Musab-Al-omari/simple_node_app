const jwt = require("jsonwebtoken");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.SECRET, { expiresIn: "1y" });

const tokenValidator = (token) => jwt.verify(token, process.env.SECRET);

const tokenDecoder = (token) => jwt.decode(token);

module.exports = { generateToken, tokenValidator, tokenDecoder };
