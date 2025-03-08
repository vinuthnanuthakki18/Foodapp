const express = require("express");
const Restaurant = require("../models/restaurants");
const router = express.Router();
const connectDB = require("../server/app");

connectDB();
// // GET Restaurants API
router.get("/restaurants", async (req, res) => {
  try {
    console.log("Fetching data...");
    const restaurants = await Restaurant.find(); // Fetch from MongoDB
    console.log("Data fetched:", restaurants); // Debugging log
    res.json(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
