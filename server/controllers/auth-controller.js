const Home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the routing Home Page in Express.js");
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" }); // Optional: handle error response
    }
};

const register = (req, res) => {
    try {
        res.status(200).send("Welcome to The Register Page");
    } catch (error) {
        console.log(error);
        res.status(404).send({ message: "Page Not Found" });
    }
};

// Export both functions in a single object
module.exports = { Home, register };
