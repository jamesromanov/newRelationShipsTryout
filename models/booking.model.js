const { ref } = require("joi");
let mongoose = require("mongoose");

let bookingSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  tour_id: { type: mongoose.Schema.Types.ObjectId, ref: "tours" },
  date: { type: String, required: true },
  tour: { type: mongoose.Schema.Types.ObjectId, ref: "tours" },
});

let Bookings = mongoose.model("bookings", bookingSchema);

module.exports = Bookings;
