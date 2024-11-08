const mongoose = require('mongoose')

// const URI = "mongodb://127.0.0.1:27017/mern-admin";  // collection


const URI = process.env.MONGO;

const connectDB = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("Connected Successfully to DB/mern-from")

    } catch (error) {
        console.log("Connection Failed");
        process.exit(0);
    }
}

module.exports = connectDB;