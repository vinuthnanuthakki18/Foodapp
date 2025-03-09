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
        console.log(user.name);
        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Invalid password');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id , username : user.name}, 'your_jwt_secret', {
            expiresIn: '1h',
        });
        res.cookie("authToken", token,user, { httpOnly: true, secure: true });
        res.json({ token, user });
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.post('/update', async (req, res) => {
    const user = req.body._id;
    const updatepass = req.body?.password || null;
    const dob = req.body.dateOfBirth;
    const gender = req.body.gender;

    if (!updatepass && !dob && !gender) {
        console.log('Empty Details');
        return res.status(400).json({ message: 'Details can’t be empty' });
    }

    try {
        // Check if user exists
        const existingUser = await User.findById(user);
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        let updated = { ...req.body };  // Spread request body

        if (updatepass) {
        updated.password = await bcrypt.hash(updatepass, 10);
            console.log("Hashed Password:", updated.password); // Debugging
        }

        const updatedUser = await User.findByIdAndUpdate(user, updated, { new: true });

        console.log("Updated User:", updatedUser);
        res.status(200).json({ message: "Details Updated successfully!", user: updatedUser });

    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
