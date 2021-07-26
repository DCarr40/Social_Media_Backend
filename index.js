const express = require("express");
const app = express();
const connectDB = require("./startup/config");
const helmet = require("helmet");
const joi = require("joi");
const morgan = require("morgan");
const collectionRoute = require("./routes/collections");
const authRoute = require("./routes/auth");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/collections", collectionRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server has started. Listening on port ${PORT}.`);
});
