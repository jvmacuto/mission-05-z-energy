const express = require("express");
const controller = require("../controller/controllers");
const router = express.Router();

//john's routes
router.get("/fetch-stations", controller.fetchAndSaveGasStations);
router.get("/get-stations", controller.getGasStations);
router.get("/hello", controller.helloWorld);

module.exports = router;
