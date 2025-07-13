const BlacklistedTokenModel = require("../../models/blacklistedToken.model");

const logout = (req, res) => {
    if (!req.headers.authorization) { return res.status(400).json({ message: "Authorization header is required" }) }
    const token = req.headers.authorization.split(" ")[1];
    const blacklistedToken = new BlacklistedTokenModel({ token });
    blacklistedToken.save();
    return res.status(200).json({ message: "User logged out successfully" });
}


module.exports = logout