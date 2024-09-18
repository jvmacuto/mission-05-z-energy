const Coordinate = require("../model/Coordinate");

//John's code
//this function is used to get all the coordinates from the database
const addCoordinate = async (req, res) => {
  const { latitude, longitude, description } = req.body;

  try {
    const newCoordinate = new Coordinate({ latitude, longitude, description });
    await newCoordinate.save();
    res.status(201).json(newCoordinate);
  } catch (err) {
    res.status(500).json({ error: "Error saving coordinate" });
  }
};

const getCoordinates = async (req, res) => {
  try {
    const coordinates = await Coordinate.find();
    res.status(200).json(coordinates);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving coordinates" });
  }
};

//tajul's code
const getGeoLocation = async (req, res) => {
  require('dotenv').config();
  try {
    const { lat, lng} = req.query
    const Google_Maps_API_Key = process.env.GOOGLE_MAPS_API_KEY
    const geocodingURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${Google_Maps_API_Key}`;
    const response = await fetch(geocodingURL);
    const data = await response.json();

    if (data.status === "OK") {
        res.json(data);
    } else {
        res.status(400).json({error: 'Geocoding error'});
    }
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({error: 'Server error'})
  }}
//tajul's code ends here

module.exports = {
  addCoordinate,
  getCoordinates,
  getGeoLocation,
};
