const express = require('express');
const bcrypt = require('bcryptjs'); // For password hashing
const User = require('../models/Users');

const router = express.Router();

// Signup API
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(), 
        });

        // Save user to database
        await newUser.save();

        res.status(201).json({ message: 'Signup successful!' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
