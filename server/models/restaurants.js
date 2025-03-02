const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    address: {
        country: String,
        fullAddress: String,
        latitude: Number,
        longitude: Number,
        postalCode: String
    },
    cuisines: [String],
    id: Number,
    link: String,
    menu: String,
    name: String,
    openStatus: String,
    openStatusText: String,
    photos: [String],
    priceTypes: String,
    rating: Number,
    reviewsCount: Number,
    telephone: String,
    thumbnail: String
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema,"restaurants");
module.exports = Restaurant;
