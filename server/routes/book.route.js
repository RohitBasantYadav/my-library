const express = require("express");
const addbook = require("../controllers/bookControllers/addbook.controller");
const getbook = require("../controllers/bookControllers/getbook.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const checkRoleMiddleware = require("../middlewares/checkRole.middleware");


const bookRouter = express.Router();

bookRouter.get("/getbook",getbook);
bookRouter.post("/admin/addbook",authMiddleware,checkRoleMiddleware,addbook);


module.exports = bookRouter;