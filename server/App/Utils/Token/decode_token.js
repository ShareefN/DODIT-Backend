const { verify } = require("jsonwebtoken");
const { extractJWT } = require("./extractJWT");

exports.decodeJWT = async (req, res) => {
  try {
    // get the token from the header
    let token = await extractJWT(req, res);
    if (!token) return false;
    const { _id } = await verify(token, process.env.ACCESS_TOKEN_SECRET);
    return _id ? { _id } : null;
  } catch (err) {
    return false;
  }
};
