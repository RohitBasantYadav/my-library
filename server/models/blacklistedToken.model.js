const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
    token: { type: String, required: true }
});

const BlacklistedTokenModel = mongoose.model("BlacklistedToken", blacklistedTokenSchema);

module.exports = BlacklistedTokenModel;