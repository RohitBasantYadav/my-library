require("dotenv").config();
const express = require("express");
const connection = require("./config/db.config");
const userRouter = require("./routes/user.route");
const bookRouter = require("./routes/book.route");

const PORT = process.env.PORT || 3030;
const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth",userRouter);
app.use("/api",bookRouter)


// Health check route
app.get("/test", (_, res) => {
    res.send("Health check");
})


app.listen(PORT,()=>{
    connection();
    console.log(`listening on port ${PORT}`);
})