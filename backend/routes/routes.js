const express = require("express");

const { getMaps, getGeoLocation } = require("../controller/controllers");
const router = express.Router();

//tajul's routes
router.get("/map", getGeoLocation);
router.get("/initmap", getMaps);

const controller = require("../controller/controllers");

//john's routes
router.get("/fetch-stations", controller.fetchAndSaveGasStations);
router.get("/get-stations", controller.getGasStations);

module.exports = router;
