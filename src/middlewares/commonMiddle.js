const jwt = require("jsonwebtoken");

//___________|| AUTHENTICATION ||___________

const authentication = async function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    if (!token) {
      return res
        .status(400)
        .send({ status: false, message: "Token is missing" });
    }
    decodedToken = jwt.verify(token, "Group16", (err, decode) => {
      if (err) {
        return res
          .status(400)
          .send({ status: false, message: "Token is not correct!" });
      }
      req.loginUserId = decode.userId;
      // console.log(decode.userId);
      next();
    });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {authentication};