const express = require("express");
const router = express.Router();
const Station = require("../model/stationModel");
const mongoose = require("mongoose"); // For ObjectId validation

// GET route for fetching all stations
router.get("/", async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route for fetching a specific station by ID
router.get("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: "Invalid station ID" });
  }

  try {
    const station = await Station.findById(req.params.id);
    if (!station) return res.status(404).json({ message: "Station not found" });
    res.json(station);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST route to create a new station
router.post("/", async (req, res) => {
  const station = new Station(req.body);
  try {
    const newStation = await station.save();
    res.status(201).json(newStation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT route for updating an existing station
router.put("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: "Invalid station ID" });
  }

  try {
    const updatedStation = await Station.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStation)
      return res.status(404).json({ message: "Station not found" });
    res.json(updatedStation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE route for deleting an existing station
router.delete("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: "Invalid station ID" });
  }

  try {
    const station = await Station.findByIdAndDelete(req.params.id);
    if (!station) return res.status(404).json({ message: "Station not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
