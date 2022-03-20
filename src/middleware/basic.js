const statue = require("http-status-codes");
const base64 = require('base-64');
module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    next("invalid login....");
  }
  try {
    const encodedHeader = req.headers.authorization.split(" ")[1];
    const decodedHeader = base64.decode(encodedHeader);
    const [email, password] = decodedHeader.split(":");
    if (email==null || password==null) {
      next("invalid login....");
    }
      
    req.email = email;
    req.password = password;
    next();
  } catch (error) {
    res
      .status(statue.StatusCodes.FORBIDDEN)
      .send({ message: "someThing went wrong", err: error });
  }
};
