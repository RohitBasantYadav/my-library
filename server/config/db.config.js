const mongoose = require("mongoose");

let uri = process.env.MONGODB_URI;

function connection() {
    mongoose.connect(uri)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));
}

module.exports = connection;