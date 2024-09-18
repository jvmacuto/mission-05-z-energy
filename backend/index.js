//import modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");



const userRouter = require("./routes/routes");

const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//use routes

//connect to the database
mongoose
  .connect("mongodb://localhost:27017/coordinates")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

//routes
app.use("/api", userRouter);

//export the app for testing
module.exports = app;

//start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
  });
}
