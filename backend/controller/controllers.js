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

module.exports = {
  addCoordinate,
  getCoordinates,
};
