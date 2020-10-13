const { sign } = require("jsonwebtoken");

exports.generateJWT = ({ _id }) => {
  return sign({ _id }, process.env.ACCESS_TOKEN_SECRET);
};
