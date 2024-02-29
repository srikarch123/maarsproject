const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const User = require('./user.model.js'); // Adjust the path to your User model

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // This is to parse JSON bodies
app.use(cors({
    origin: 'http://localhost:4200', // Allow only this origin to access
    optionsSuccessStatus: 200 // For legacy browser support
}));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017') //replace with database as needed
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Signup Route
app.post('/signup', async (req, res) => {
    const { email } = req.body;
     // Check if email already exists
     const userExists = await User.findOne({ email });
     if (userExists) {
         return res.status(409).send({ message: 'Email already in use.' }); // 409 Conflict
     }
     
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // Using 10 rounds for hashing

        // Create a new user
        const user = new User({
            email: req.body.email,
            password: hashedPassword,
            phoneNumber: req.body.phoneNumber,
        });

        // Save the user in the database
        await user.save();

        // Respond with the created user (excluding the password for security)
        res.status(201).send({ user: { email: user.email, phoneNumber: user.phoneNumber } });
    } catch (error) {
        console.error(error); // Logging the error can help in debugging
        res.status(400).send({ message: error.message }); // Send a more user-friendly message
    }
});

// Signin Route
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send({ message: 'Email or password is incorrect' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: 'Email or password is incorrect' });
        }

        // If the password matches, respond with a success message (or token, etc.)
        res.status(200).send({ message: 'Sign in successful' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
