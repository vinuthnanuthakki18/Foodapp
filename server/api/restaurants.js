const express = require("express");
const axios = require("axios");
const response = require("./response");
const router = express.Router();

// API route to fetch restaurants
router.get("/", async (req, res) => {
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
  try {
    // const response = await axios.request(options);
    res.json({ success: true, data: response.data });
    // console.log(response.data); // Send API response to frontend
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
