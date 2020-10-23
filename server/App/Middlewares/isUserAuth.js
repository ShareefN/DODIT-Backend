const { User } = require("../Models/User.model");
const { decodeJWT } = require("../Utils/Token");
const { errHandler } = require("../Utils/Errors");

exports.isUserAuth = async (req, res, next) => {
  try {
    let { _id } = await decodeJWT(req, res);
    if (!_id) return errHandler(403, res);
    // check if the _id is in data base
    let user = await User.findOne({
      _id,
    });
    if (!user) return errHandler(403, res);
    // save the data in the request
    req._id = _id;
    return next();
  } catch (err) {
    return errHandler(err, res);
  }
};
