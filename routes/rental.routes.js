const express = require("express");
const router = express.Router();
const upload = require("../upload");

const {
  getAllRental,
  getSearchRental,
  createRental,
  deleteRental,
  returnVehicle,
} = require("../controllers/rental.controller");
router.route("/").get(getAllRental).post(createRental);
router.route("/search/:search").get(getSearchRental);
router.route("/delete/:id").patch(deleteRental);
router.route("/return/:id").patch(returnVehicle);

module.exports = router;
