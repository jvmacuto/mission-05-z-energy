const express = require("express");
const { addCoordinate, getCoordinates } = require("../controller/controllers");
const router = express.Router();

router.post("/addCoordinate", addCoordinate);
router.get("/getCoordinates", getCoordinates);

module.exports = router;
