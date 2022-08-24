const express = require("express");
const compression = require("compression");
const { join } = require("path");
const { tasksRouter, categoryRouter } = require("./routes");

const app = express();
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "..", "public")));
app.use(compression());

// Database Routes
app.use(tasksRouter, categoryRouter);

app.use((req, res) => {
  res.status(404).json({ message: "The requested page is not found" });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal Server Error", error: err.stack });
});

module.exports = app;
