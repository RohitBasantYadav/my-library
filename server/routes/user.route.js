const express = require("express");
const { register } = require("../controllers/userControllers/register.controller");
const login = require("../controllers/userControllers/login.controller");
const logout = require("../controllers/userControllers/logout.controller");
const profile = require("../controllers/userControllers/profile.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const userRouter = express.Router();


userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.get("/me",authMiddleware,profile);



module.exports = userRouter;