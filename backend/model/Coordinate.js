const mongoose = require("mongoose");

const coordinateSchema = new mongoose.Schema({
  place_id: String,
  name: String,
  geometry: {
    location: {
      lat: Number,
      lng: Number,
    },
  },
});

const Coordinate = mongoose.model("Coordinate", coordinateSchema);

module.exports = Coordinate;
