const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Middleware to parse JSON requestsmkd
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
const playerRoutes = require("./routes/players.js");
app.use("/api/players", playerRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to MongoDB and start the server
mongoose
  .connect("mongodb+srv://Madhu123:Madhu123@cluster0.tbnz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.error("Failed to connect", err));
