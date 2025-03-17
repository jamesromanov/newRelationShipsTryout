const { response } = require("../utils/response");

let middErr = (err, req, res, next) => {
  response(res, { message: "middleware error:" + err.message });
};

module.exports = middErr;
