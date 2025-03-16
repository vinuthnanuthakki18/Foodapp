const mongoose = require('mongoose');
require('dotenv').config(); 
// mongoose.connect('mongodb+srv://<vinuthnanuthakki18>:<Vinuthnamongo1822>@cluster0.mongodb.net/<Foodapp>?retryWrites=true&w=majority')
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('Could not connect to MongoDB', err));

// module.exports = connectDB;
// const express = require("express");
// // const Restaurant = require("./models/restaurants");
// // const router = express.Router();
// const app =express();
// app.use(express.json());

const connectDB = async () => {
    try {
        // Replace <username>, <password>, and <database> with your MongoDB Atlas details
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected Successfully!');
    } catch (err) {
        console.error('Could not connect to MongoDB:', err.message);
        process.exit(1); // Exit process with failure
    }
};


module.exports = connectDB;
