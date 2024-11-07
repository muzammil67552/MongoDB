const User = require('../models/user-models');
const bcrypt = require('bcryptjs'); // Ensure bcrypt is imported

// Home Route
const Home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the routing Home Page in Express.js");
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

// Register Route
const register = async (req, res) => {
    try {
        console.log(req.body); // Check request body content
        const { username, email, phone, password } = req.body;
      
        // Await the findOne call
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json("User Already Exist");
        }
    
        // Create new user and store result in a variable
        const newUser = await User.create({ username, email, phone, password });

        // Send back the new user's data as response
        res.status(200).json({ data: newUser });
    } catch (error) {
        console.log(error);
        res.status(404).send({ message: "Page Not Found" });
    }
};

// Login Route
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
      
        // Find user by email
        const userExist = await User.findOne({ email });
        
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
      
        // Compare provided password with the stored hashed password
        const isUser = await bcrypt.compare(password, userExist.password);
        
        if (isUser) {
            // Assuming `generateToken` is a method on the `User` schema for creating tokens
            const token = await userExist.generateToken();

            res.status(200).json({
                message: "Login Successfully",
                token: token,
                userid: userExist._id.toString(),
            });
        } else {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

// Export all functions
module.exports = { Home, register, login };
