const express = require("express");

const { getMaps, getGeoLocation , addCoordinate, getCoordinates } = require("../controller/controllers");
const router = express.Router();

//tajul's routes
router.post("/addCoordinate", addCoordinate);
router.get("/getCoordinates", getCoordinates);
router.get('/map', getGeoLocation);
router.get('/initmap', getMaps);

const controller = require("../controller/controllers");

//john's routes
router.get("/fetch-stations", controller.fetchAndSaveGasStations);
router.get("/get-stations", controller.getGasStations);
router.get("/hello", controller.helloWorld);


module.exports = router;
