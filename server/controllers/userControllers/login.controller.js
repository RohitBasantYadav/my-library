const UserModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        let checkIfUserisPresent = await UserModel.findOne({ email });
        if (!checkIfUserisPresent) {
            return res.status(400).json({ message: "User not found" });
        }
        bcrypt.compare(password, checkIfUserisPresent.password, function (err, result) {
            if (err) {
                return res.status(500).json({ message: "Error while comparing password" });
            }
            if (result) {
                const token = jwt.sign({ user_id: checkIfUserisPresent._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
                checkIfUserisPresent.lastLogin = new Date();
                checkIfUserisPresent.save();
                return res.status(200).json({ message: "User logged in successfully", accessToken: token });
            } else {
                return res.status(400).json({ message: "Incorrect password" });
            }

        });
    } catch (error) {
        return res.status(500).json({ message: `Internal Server error ${error}` });
    }

}

module.exports = login;