const { sign } = require('jsonwebtoken');

exports.generateJWT = ({ _id, email }) => {
  return sign({ _id, email }, process.env.ACCESS_TOKEN_SECRET);
};
