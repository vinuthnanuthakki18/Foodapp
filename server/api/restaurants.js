const express = require('express');
const router = express.Router();
const restaurantsAPI = require('./response.js');
// console.log(restaurantsAPI);
router.get('/', (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const items = parseInt(req.query.items, 10) || 12;
  const startIndex = (page-1)*items;

const returnRestaurants = restaurantsAPI.slice(startIndex,startIndex + parseInt(items, 10));
  // console.log(returnRestaurants);
// console.log(returnRestaurants.length, page, items, startIndex );
  res.json({ data : returnRestaurants, total : restaurantsAPI.length, page, items});
});

module.exports = router;