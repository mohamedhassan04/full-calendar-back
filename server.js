console.clear();
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use("/api/calendar", require("./Controllers/CalenderController"));

mongoose.connect(process.env.MONGODB_URI, console.log("Connect to MongoDB"));

app.listen(5000, console.log("Server Started"));
