let mongoose = require("mongoose");

let bookingSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  tour_id: { type: String },
  date: { type: String, required: true },
  tour: { type: String },
});

let Bookings = mongoose.model("bookings", bookingSchema);

module.exports = Bookings;
