const express = require("express");
const axios = require("axios");
const response = require("./response");
const router = express.Router();
const Restaurant = require("../models/restaurants");
// API route to fetch restaurants
// router.get("/", async (req, res) => {
//   const options = {
//     method: "GET",
//     url: "https://real-time-tripadvisor-scraper-api.p.rapidapi.com/tripadvisor_restaurants_search_v2",
//     params: {
//       location: "new york", // Replace with dynamic location if needed
//     },
//     headers: {
//       "x-rapidapi-key": "6e5a45bf81msh9858f601c7c832fp1d7e2bjsnc352e819b817",
//       "x-rapidapi-host": "real-time-tripadvisor-scraper-api.p.rapidapi.com",
//     },
//   };
// console.log(response);
//connect from local file
//   try {
//     // const response = await axios.request(options);
//     res.json({ success: true, data: response });
//     // console.log(response.data); // Send API response to frontend
//   } catch (err) {
//     console.error("Error fetching data:", err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

router.post("/add-restaurants", async (req, res) => {
  try {
      const result = await Restaurant.insertMany(req.body); // Insert multiple records
      res.status(201).json({ message: "Restaurants added successfully", data: result });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

module.exports = router;
