const { response } = require("../utils/response");
const Guides = require("../models/tourGuide.model");
const { errorHandler } = require("../utils/error.handler");
const Joi = require("joi");
let joiGuides = Joi.object({
  name: Joi.string().min(5).max(20),
  experience: Joi.number().min(1).max(50),
  phone: Joi.string(),
  tours: Joi.array(),
});
let addGuides = errorHandler(async (req, res, next) => {
  let { name, experience, phone, tours } = req.body;
  let data = joiGuides.validate({ name, experience, phone, tours });
  if (data.error) throw new Error("Pls enter datas correctly!");
  let guide = await Guides.create({ name, experience, phone, tours });
  response(res, guide, 201);
});
let getGuidesById = errorHandler(async (req, res, next) => {
  let id = req.params.id;
  let guide = await Guides.findById(id);
  response(res, guide);
});
let deleteGuide = errorHandler(async (req, res, next) => {
  let id = req.params.id;
  let guides = await Guides.findByIdAndDelete(id);
  response(res, guides, 204);
});
let updateGuide = errorHandler(async (req, res, next) => {
  let id = req.params.id;
  let guide = await Guides.findByIdAndUpdate(id, req.body);
  response(res, guide, 203);
});

module.exports = { updateGuide, deleteGuide, addGuides, getGuidesById };
