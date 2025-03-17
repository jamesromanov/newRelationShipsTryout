const express = require("express");
const tourController = require("../controller/tours.controller");

const tourRouter = express.Router();

tourRouter.route("/").post(tourController.addTours);
tourRouter
  .route("/:id")
  .get(tourController.getToursById)
  .put(tourController.updateTour)
  .delete(tourController.deleteTours);
module.exports = tourRouter;
