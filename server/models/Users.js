const mongoose = require('mongoose');

// Define the schema for User
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure no duplicate emails
        match: [/.+@.+\..+/, 'Invalid email format'], // Validate email
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the User model
const User = mongoose.model('Users', userSchema, 'Users');

module.exports = User;