const BlacklistedTokenModel = require("../models/blacklistedToken.model");
const jwt = require("jsonwebtoken")
const authMiddleware = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(400).json({ message: "Authorization header is required" });
    }
    const token = req.headers.authorization.split(" ")[1];
    try {
        const checkIsBlackListed = await BlacklistedTokenModel.findOne({ token });
        if (checkIsBlackListed) {
            return res.status(400).json({ message: "Token is blacklisted, Please login again" });
        }
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(400).json({ message: "Invalid token" });
            }
            if (decoded) {
                req.user_id = decoded.user_id;
                next();
            }
        })
    } catch (error) {
        return res.status(500).json({ message: `Internal Server error ${error}` });
    }
}

module.exports = authMiddleware