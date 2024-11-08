require('dotenv').config(); // it should be on the top
const express = require("express");
const app = express();
const router = require('./router/auth-router');
const connectDB = require('./utlis/db');
const cors = require('cors');

// CORS configuration
const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5174"], // Allow both origins
    methods: ["GET", "POST", "DELETE", "PATCH", "HEAD"],
    credentials: true, // Fixed capitalization for 'credentials'
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", router); // Function use for router

const PORT = 9000;

connectDB().then(() => { // Function use for MongoDB
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
