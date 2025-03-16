const express = require('express');
const connectDB = require('./server/app'); // Import the connectDB function
const cors = require('cors'); // Import CORS
const authRoutes = require('./routes/auth'); // Import auth routes
const loginRoute = require('./POST/api/login');
// const updateRoute = require('./POST/api/login/update'); // Import login route
const restaurantRoutes = require('./api/restaurants.js');

const app = express();
const router = express.Router();
// Middleware
app.use(express.json());
app.use(cors({ origin: 'https://foodapp-frontend-envwwzw0u-nuthakki-vinuthnas-projects.vercel.app/' })); // Replace with your frontend URL

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes); // Use signup routes
app.use('/api', loginRoute); // Use login routes
// app.use('/api/update',updateRoute);
app.use('/api/restaurants', restaurantRoutes);
// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
