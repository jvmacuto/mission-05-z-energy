const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  fuelPrices: {
    premium: Number,
    unleaded: Number,
    diesel: Number,
  },
  services: [String],
  hours: [
    {
      day: String,
      hours: String,
    },
  ],
  location: {
    lat: Number,
    lng: Number,
  },
});

module.exports = mongoose.model("Station", stationSchema);
