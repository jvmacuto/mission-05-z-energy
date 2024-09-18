const express = require("express");
const { getGeoLocation , addCoordinate, getCoordinates } = require("../controller/controllers");
const router = express.Router();

router.post("/addCoordinate", addCoordinate);
router.get("/getCoordinates", getCoordinates);
router.get('/map', getGeoLocation);

module.exports = router;
