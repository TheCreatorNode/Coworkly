const express = require("express");
const connectMongo = require("./config/mongo-connection");
const apiRoutes = require("./src/api");
const helmet = require("helmet");
const app = express();
app.use(require("cors")());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Coworkly API is running");
});

connectMongo();

module.exports = app;
