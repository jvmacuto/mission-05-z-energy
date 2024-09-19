const mongoose = require("mongoose");

const connections = {};

const connectToDatabase = async (dbName) => {
  if (connections[dbName]) {
    console.log(`Using existing connection to ${dbName} database`);
    return connections[dbName];
  }

  try {
    const db = await mongoose.createConnection(
      `mongodb://localhost:27017/${dbName}`,
      {
        serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      }
    );

    connections[dbName] = db;
    console.log(`Connected to ${dbName} database`);
    return db;
  } catch (error) {
    console.error(`Error connecting to ${dbName} database:`, error);
    throw new Error(`Database connection to ${dbName} failed`);
  }
};

module.exports = connectToDatabase;
