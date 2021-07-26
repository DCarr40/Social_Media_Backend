const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

dotenv.config();

function connectDB() {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qms4x.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Connected to SocialMedaiDB");
    })
    .catch((err) => {
      console.log(err.message, process.env.DB_NAME, process.env.DB_USER);
    });
}

module.exports = connectDB;
