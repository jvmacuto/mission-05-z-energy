const mongoose = require("mongoose");

// Define the auction schema
const auctionSchema = new mongoose.Schema({
  title: String,
  description: String,
  start_price: Number,
  reserve_price: Number,
});

// Create a model based on the schema
const Auction = mongoose.model("Auction", auctionSchema);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/auctionDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Sample auction data
const auctionData = [
  {
    title: "Vintage Lamp",
    description: "A classic vintage lamp.",
    start_price: 50,
    reserve_price: 100,
  },
  {
    title: "Antique Clock",
    description: "A rare antique clock.",
    start_price: 200,
    reserve_price: 300,
  },
  {
    title: "Modern Art Piece",
    description: "A unique modern art piece.",
    start_price: 500,
    reserve_price: 1000,
  },
];

// Seed function to add data
const seedData = async () => {
  try {
    await Auction.deleteMany(); // Clear any existing data
    await Auction.insertMany(auctionData); // Insert new data
    console.log("Data seeded successfully!");
    mongoose.connection.close(); // Close the connection
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

// Call the seed function
seedData();
