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
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5', { useNewUrlParser: true, useUnifiedTopology: true }) // Replace 'yourDatabaseName' with your actual database name
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
