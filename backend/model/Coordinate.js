const mongoose = require("mongoose");
const connectToDatabase = require("../database/db"); // Adjust the path as needed

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

const getCoordinateModel = async () => {
  try {
    const db = await connectToDatabase("coordinates");
    if (db.readyState !== 1) {
      throw new Error("Database connection is not ready");
    }
    // Register the model with the connection
    const Coordinate = db.model("Coordinate", coordinateSchema);
    return Coordinate;
  } catch (error) {
    console.error("Error getting Coordinate model:", error);
    throw error;
  }
};

module.exports = getCoordinateModel;
