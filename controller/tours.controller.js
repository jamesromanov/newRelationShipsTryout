const { response } = require("../utils/response");
const Tours = require("../models/tour.model");
const { errorHandler } = require("../utils/error.handler");
const Joi = require("joi");

let toursValidator = Joi.object({
  name: Joi.string()
    .min(5)
    .max(30)
    .pattern(/^[a-zA-Z]+$/),
  description: Joi.string().min(5).max(60),
  price: Joi.number().min(200).max(100000),
  location: Joi.string().min(5).max(20),
  guides: Joi.array(),
});
let addTours = errorHandler(async (req, res, next) => {
  let { name, description, price, location, guides } = req.body;
  let data = toursValidator.validate(req.body);
  if (data.error) console.log(data.error);
  let tour = await Tours.create({
    name,
    description,
    price,
    location,
    guides,
  });
  response(res, tour, 201);
});
let getToursById = errorHandler(async (req, res, next) => {
  let id = req.params.id;
  let tour = await Tours.findById(id);
  if (!tour) response(res, "user not found!", 404);
  response(res, tour, 200);
});
let deleteTours = errorHandler(async (req, res, next) => {
  let id = req.params.id;
  let tour = await Tours.findByIdAndDelete(id);
  response(res, tour, 204);
});
let updateTour = errorHandler(async (req, res, next) => {
  let id = req.params.id;
  let tour = await Tours.findByIdAndUpdate(id, req.body);
  response(res, tour, 203);
});

module.exports = { addTours, getToursById, updateTour, deleteTours };
