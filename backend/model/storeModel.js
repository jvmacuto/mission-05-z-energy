const mongoose = require("mongoose");
const connectToDatabase = require("../db"); // Adjust the path as needed

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

const getStoreModel = async () => {
  const db = await connectToDatabase("zenergy");
  return db.model("Store", storeSchema);
};

module.exports = getStoreModel;
