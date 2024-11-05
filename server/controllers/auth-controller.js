const User = require('../models/user-models');

const Home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the routing Home Page in Express.js");
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

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

// Export both functions in a single object
module.exports = { Home, register };
