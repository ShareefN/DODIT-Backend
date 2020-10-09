/** THIS FUNCTION IS TO EXTRACT THE TOKEN FROM THE REQUEST HEADER */

exports.extractJWT = async (req, res) => {
  try {
    const autherization = req.headers['authorization'];
    if (!autherization) return false;
    let token = autherization.split(' ')[1];
    if (!token) return false;
    return token;
  } catch (err) {
    return false;
  }
};
