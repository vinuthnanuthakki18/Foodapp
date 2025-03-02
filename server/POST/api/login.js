const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/Users'); // Adjust the path to your User model

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Email not found');
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Invalid password');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', {
            expiresIn: '1h',
        });
        res.cookie("authToken", token, { httpOnly: true, secure: false });
        res.json({ token });
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
// const bcrypt = require('bcrypt');

// (async () => {
//     const plainPassword = "nuthakki"; // Replace with your actual password
//     const saltRounds = 10;

//     const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
//     console.log("Hashed Password:", hashedPassword);
// })();
