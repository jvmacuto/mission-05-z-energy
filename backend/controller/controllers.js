const Coordinate = require("../model/Coordinate");
const axios = require("axios");

// John's code
// Function to fetch Z Energy gas stations from Google Maps API and save to MongoDB
const fetchAndSaveGasStations = async (req, res) => {
  const apiKey = "AIzaSyBtdzx5ELApWo1_3H678plhHeCTDE7aBys"; // Replace with your actual API key
  const center = {
    lat: -40.9006, // Center of New Zealand
    lng: 174.886,
  };
  const location = `${center.lat},${center.lng}`;
  const radius = 50000; // 50 km radius for each request
  const keyword = "Z";
  const type = "gas_station";
  const region = "nz";

  let nextPageToken = null;
  let allGasStations = [];
  try {
    do {
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&keyword=${keyword}&key=${apiKey}&region=${region}${
        nextPageToken ? `&pagetoken=${nextPageToken}` : ""
      }`;
      const response = await axios.get(url);
      const gasStations = response.data.results;
      allGasStations = allGasStations.concat(gasStations);
      nextPageToken = response.data.next_page_token;

      // Google Places API may take a few seconds to generate the next page token
      if (nextPageToken) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    } while (nextPageToken);

    // Save gas stations to MongoDB
    await Coordinate.deleteMany({});
    await Coordinate.insertMany(allGasStations);

    res.json({ message: "Gas stations fetched and stored in database" });
  } catch (error) {
    console.error("Error fetching gas stations:", error);
    res.status(500).send("Internal Server Error");
  }
};

//Function to get gas stations from MongoDB
const getGasStations = async (req, res) => {
  try {
    const gasStations = await Coordinate.find({});
    res.json(gasStations);
  } catch (error) {
    console.error("Error fetching gas stations from database:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  fetchAndSaveGasStations,
  getGasStations,
};
