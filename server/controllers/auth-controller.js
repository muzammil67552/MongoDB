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
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const newUser = await User.create({ username, email, phone, password });
        
        // Generate token for the new user
        const token = newUser.generateToken();

        res.status(200).json({
            message: "User Token are",
            token: token,
            userid: newUser._id.toString()
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
// Login Route
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isUser = await bcrypt.compare(password, userExist.password);
        
        if (isUser) {
            const token = userExist.generateToken(); // Generate token using method

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
};// Export all functions
module.exports = { Home, register, login };
