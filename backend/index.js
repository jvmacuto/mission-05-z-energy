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
app.get("/", (req, res) => {
  res.send("Hello World");
});

//start server
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
