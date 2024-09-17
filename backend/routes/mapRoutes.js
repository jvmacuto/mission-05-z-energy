const express = require("express");
const router = express.Router();
const mapController = require("../controller/mapController");

// Define your routes here

router.get('/map', mapController.getGeoLocation);


// Export the router
module.exports = { router };