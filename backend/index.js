//import modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//use routes

//print hello world
app.get("/api/endpoint", (req, res) => {
  res.status(200).json({ data: "Hello World" });
});

//export the app for testing
module.exports = app;

//start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
  });
}
