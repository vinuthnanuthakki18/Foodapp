import express from 'express';
import connectDB from './server/app.js';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import loginRoute from './POST/api/login.js';
import restaurantRoutes from './api/restaurants.js';


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
