const express = require("express");
const bookingController = require("../controller/booking.controller");

const bookingRouter = express.Router();
bookingRouter.route("/").post(bookingController.addBookings);
bookingRouter
  .route("/:id")
  .get(bookingController.getBookingsById)
  .delete(bookingController.deleteBooking)
  .put(bookingController.updateBooking);
module.exports = bookingRouter;
