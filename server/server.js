require('dotenv').config(); // it should be on the top
const express = require("express"); // corrected from request to require
const app = express();
const router = require('./router/auth-router')
const connectDB = require('./utlis/db')



app.use(express.json())
app.use("/api/auth", router)        //function use for router

const PORT = 9000;

connectDB().then(() => {            // function use for mongoDB
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`); // Corrected use of template literals
    });
})

