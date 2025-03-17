const { ref } = require("joi");
const mongoose = require("mongoose");

let tourguideSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 5, maxLength: 30 },
  experience: { type: Number, required: true, min: 1, max: 50 },
  phone: { type: String, required: true },
  tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "tours" }],
});

let Guides = mongoose.model("guides", tourguideSchema);

module.exports = Guides;
