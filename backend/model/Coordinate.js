const mongoose = require("mongoose");

const coordinateSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const Coordinate = mongoose.model("Coordinate", coordinateSchema);

module.exports = Coordinate;
