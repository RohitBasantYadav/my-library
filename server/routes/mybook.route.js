const express = require("express");


const bookRouter = express.Router();

bookRouter.get("/mybook",getmybook);
bookRouter.post("/mybook/:bookId",addmybook);
bookRouter.patch("/mybook/:bookId/status",updatemybookstatus);
bookRouter.patch("/mybook/:bookId/rating",updatemybookrating);


module.exports = bookRouter;