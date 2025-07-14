const UserModel = require("../models/user.model");

const checkRoleMiddleware = async (req,res,next) =>{
    const user = await UserModel.findById(req.user_id);
    if(user.role !== "admin"){
        return res.status(400).json({message:"You are not authorised as an admin"});
    }
    next();
}

module.exports = checkRoleMiddleware