const express = require("express");
const middErr = require("../utils/error");
const tourRouter = require("../routes/tours.router");
const bookingRouter = require("../routes/booking.router");
const guidesRouter = require("../routes/guides.router");

const app = express();
app.use(express.json());
app.use(middErr);
app.use("/tours", tourRouter);
app.use("/bookings", bookingRouter);
app.use("/guides", guidesRouter);
module.exports = app;
