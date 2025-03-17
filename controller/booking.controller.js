const Joi = require("joi");
const Bookings = require("../models/booking.model");
const { response } = require("../utils/response");
const { errorHandler } = require("../utils/error.handler");
let joiBookValidator = Joi.object({
  user_name: Joi.string().min(4).max(20),
  tour_id: Joi.string().min(4).max(40),
  date: Joi.string(),
});
let addBookings = errorHandler(async (req, res, next) => {
  let { user_name, tour_id, date } = req.body;
  let data = joiBookValidator.validate({ user_name, tour_id, date });
  if (data.error) throw new Error("Pls enter datas correctly");
  let booking = await Bookings.create({ user_name, tour_id, date });
  response(res, booking, 201);
});
let getBookingsById = errorHandler(async (req, res, next) => {
  let id = req.params.id;
  let booking = await Bookings.findById(id);
  if (!booking) response(res, "booking not found", 404);
  else response(res, booking);
});
let deleteBooking = errorHandler(async (req, res, next) => {
  let id = req.params.id;
  let booking = await Bookings.findByIdAndDelete(id);
  response(res, booking, 204);
});
let updateBooking = errorHandler(async (req, res, next) => {
  let id = req.params.id;
  let booking = await Bookings.findByIdAndUpdate(id, req.body);
  response(res, booking, 203);
});
module.exports = { addBookings, getBookingsById, updateBooking, deleteBooking };
