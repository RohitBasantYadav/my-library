const UserModel = require("../../models/user.model");
const bcrypt = require("bcrypt");


const register = async (req, res) => {
    const { name, email, password, role, phone } = req.body;
    try {
        if(!req.body){
            return res.status(400).json({message:"All fields are required"});
        }
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const checkIfUserisPresent = await UserModel.findOne({ email });
        if (checkIfUserisPresent) {
            return res.status(400).json({ message: "User already exists" });
        }
        
        const avatar = `https://avatar.iran.liara.run/username?username=${name}`
        bcrypt.hash(password, 5, function (err, hash) {
            if (hash) {
                if (role && phone && profilePic) {
                    const registerUser = new UserModel({ name, email, password: hash, role, phone, profilePic });
                    registerUser.save();
                    return res.status(201).json({ message: "User registered successfully" });
                } else {
                    const registerUser = new UserModel({ name, email, password: hash, profilePic:avatar });
                    registerUser.save();
                    return res.status(201).json({ message: "User registered successfully" });
                }
            } else {
                return res.status(500).json({ message: "Error while hashing password" });
            }
        })
    } catch (error) {
        return res.status(500).json({ message: `Internal Server error ${error}` });
    }
}

module.exports = { register };