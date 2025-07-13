const express = require("express");
const addbook = require("../controllers/bookControllers/addbook.controller");
const getbook = require("../controllers/bookControllers/getbook.controller");


const bookRouter = express.Router();

bookRouter.post("/addbook",addbook);
bookRouter.get("/getbook",getbook);


module.exports = bookRouter;