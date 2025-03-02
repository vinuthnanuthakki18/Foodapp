const express = require('express');
const connectDB = require('./server/app'); // Import the connectDB function
const cors = require('cors'); // Import CORS
const authRoutes = require('./routes/auth'); // Import auth routes
const loginRoute = require('./POST/api/login'); // Import login route
const restaurantRoutes = require('./api/restaurants.js');


const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Replace with your frontend URL

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes); // Use signup routes
app.use('/api', loginRoute); // Use login routes
app.use('/api/restaurants', restaurantRoutes);
// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
