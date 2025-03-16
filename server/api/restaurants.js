const express = require('express');
const router = express.Router();
const restaurantsAPI = require('./response.js');
const Restaurant = require('../models/Restaurant'); 

// console.log(restaurantsAPI);
router.get('/', async (req, res) => {
  try{
    const page = parseInt(req.query.page, 10) || 1;
    const items = parseInt(req.query.items, 10) || 12;
    const startIndex = (page-1)*items;
    const Restaurantss = await Restaurant.find();
const returnRestaurants = Restaurantss.slice(startIndex,startIndex + parseInt(items, 10));
// console.log(returnRestaurants.length, page, items, startIndex );

  res.json({ data : returnRestaurants, total : restaurantsAPI.length, page, items});
}catch (error) {
  res.status(500).json({ message: "Error fetching restaurants", error });
}
});

router.post('/search', async (req, res) => {
  const query = req.query.query;
    console.log(query);
  if(!query)  return res.json([]);

  try{
    const Restaurantss = await Restaurant.find({
      name : {$regex : query, $options : "i"}
    });
// console.log(returnRestaurants.length, page, items, startIndex );
    // console.log(Restaurantss);
  res.json({ data : Restaurantss, total : Restaurantss.length});
}catch (error) {
  res.status(500).json({ message: "Error fetching restaurants", error });
}
});

module.exports = router;