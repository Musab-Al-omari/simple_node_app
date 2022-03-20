const statue = require("http-status-codes");
const { tokenValidator } = require("../utils");

module.exports = async (req, res, next) => {
  try {
    !req.headers.authorization && next("invalid login....");
    const token = req.headers.authorization.split(" ")[1];
    req.parseToken = tokenValidator(token);
    next();
  } catch (error) {
    res
      .status(statue.StatusCodes.FORBIDDEN)
      .send({ message: "someThing went wrong", err: error });
  }
};
