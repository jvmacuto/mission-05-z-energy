const getCoordinateModel = require("../model/Coordinate");

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
      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Z+Energy+gas+stations+in+New+Zealand&key=${apiKey}&region=${region}${
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
// Function to get gas stations from MongoDB
const getGasStations = async (req, res) => {
  try {
    const Coordinate = await getCoordinateModel();
    const gasStations = await Coordinate.find({});
    res.json(gasStations);
  } catch (error) {
    console.error("Error fetching gas stations from database:", error);
    res.status(500).send("Internal Server Error");
  }
};

//tajul's code
const getGeoLocation = async (req, res) => {
  require("dotenv").config();
  try {
    const { lat, lng } = req.query;
    const Google_Maps_API_Key = process.env.GOOGLE_MAPS_API_KEY;
    const geocodingURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${Google_Maps_API_Key}`;
    const response = await fetch(geocodingURL);
    const data = await response.json();

    if (data.status === "OK") {
      res.json(data);
    } else {
      res.status(400).json({ error: "Geocoding error" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const getMaps = async (req, res) => {
  require("dotenv").config();
  const Google_Maps_API_Key = process.env.GOOGLE_MAPS_API_KEY;
  const scriptURL = `https://maps.googleapis.com/maps/api/js?key=${Google_Maps_API_Key}&libraries=maps,marker&v=beta`;
  res.send(scriptURL);
};
//tajul's code ends here

//function to display hello world
const helloWorld = (req, res) => {
  res.status(200).json({ message: "Hello World" });
};

module.exports = {
  fetchAndSaveGasStations,
  getGasStations,
  helloWorld,
  getGeoLocation,
  getMaps,
};
