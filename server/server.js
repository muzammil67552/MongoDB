const express = require("express"); // corrected from request to require
const app = express();
const router = require('./router/auth-router')

app.use("/api/auth", router)

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`); // Corrected use of template literals
});
