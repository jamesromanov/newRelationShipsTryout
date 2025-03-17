let mongoose = require("mongoose");

let tourSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 5, maxLength: 30 },
  description: { type: String, default: "its good trip!" },
  price: { type: Number, required: true, min: 200, max: 100000 },
  location: { type: String, required: true, minLength: 5, maxLength: 20 },
  guides: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "guides" },
  ],
});

let Tours = mongoose.model("tours", tourSchema);
module.exports = Tours;
