const mongoose = require('mongoose')

// const URI = "mongodb://127.0.0.1:27017/mern-admin";  // collection


const URI = "mongodb+srv://yoursmuzammil16070:khan16070@mern-form.i0o8p.mongodb.net/yoursmuzammil16070?retryWrites=true&w=majority&appName=Mern-Form";

const connectDB = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("Connected Successfully to DB/mern_admin")

    } catch (error) {
        console.log("Connection Failed");
        process.exit(0);
    }
}

module.exports = connectDB