// storeModel.js
const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: String,
  address: String,
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

module.exports = mongoose.model("Store", storeSchema);
