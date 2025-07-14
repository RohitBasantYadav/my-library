const express = require("express");
const getmybook = require("../controllers/myBookControllers/getmybook.controller");
const addmybook = require("../controllers/myBookControllers/addmybook.controller");
const updatemybookstatus = require("../controllers/myBookControllers/updatemybookstatus.controller");
const updatemybookrating = require("../controllers/myBookControllers/updatemybookrating.controller");


const mybookRouter = express.Router();

mybookRouter.get("/mybook",getmybook);
mybookRouter.post("/mybook/:bookId",addmybook);
mybookRouter.patch("/mybook/:bookId/status",updatemybookstatus);
mybookRouter.patch("/mybook/:bookId/rating",updatemybookrating);


module.exports = mybookRouter;