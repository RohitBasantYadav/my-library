const UserModel = require("../../models/user.model");

const profile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user_id);
        return res.status(200).json({ message: "User fetched successfully", userData: user });
    } catch (error) {
        return res.status(500).json({ message: `Internal Server error ${error}` });
    }
}

module.exports = profile;