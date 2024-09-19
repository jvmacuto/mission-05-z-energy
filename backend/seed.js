const mongoose = require("mongoose");

// Define the station schema
const stationSchema = new mongoose.Schema({
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

// Create a model based on the schema
const Station = mongoose.model("Station", stationSchema);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/zenergyDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Sample station data
const stationData = [
  {
    name: "Z Energy Wellington",
    address: "123 Wellington Road",
    fuelPrices: {
      premium: 2.95,
      unleaded: 2.75,
      diesel: 2.4,
    },
    services: ["Car Wash", "Cafe"],
    hours: [
      { day: "Monday", hours: "Open 24 hours" },
      { day: "Tuesday", hours: "Open 24 hours" },
      { day: "Wednesday", hours: "Open 24 hours" },
    ],
    location: { lat: -41.2865, lng: 174.7762 },
  },
  {
    name: "Z Energy Auckland",
    address: "456 Auckland Avenue",
    fuelPrices: {
      premium: 3.0,
      unleaded: 2.85,
      diesel: 2.5,
    },
    services: ["Car Wash", "ATM"],
    hours: [
      { day: "Thursday", hours: "Open 24 hours" },
      { day: "Friday", hours: "Open 24 hours" },
      { day: "Saturday", hours: "Open 24 hours" },
    ],
    location: { lat: -36.8485, lng: 174.7633 },
  },
];

// Seed function to add station data
const seedData = async () => {
  try {
    await Station.deleteMany(); // Clear any existing data
    await Station.insertMany(stationData); // Insert new data
    console.log("Station data seeded successfully!");
    mongoose.connection.close(); // Close the connection
  } catch (error) {
    console.error("Error seeding station data:", error);
  }
};

// Call the seed function
seedData();
