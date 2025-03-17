const express = require("express");
const guidesController = require("../controller/guides.controller");

const guidesRouter = express.Router();
guidesRouter.route("/").post(guidesController.addGuides);
guidesRouter
  .route("/:id")
  .delete(guidesController.deleteGuide)
  .put(guidesController.updateGuide)
  .get(guidesController.getGuidesById);
module.exports = guidesRouter;
