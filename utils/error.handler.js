const { response } = require("../utils/response");

let errorHandler = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((error) => response(res, error.message, 501));
  };
};

module.exports = { errorHandler };
