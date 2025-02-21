const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 8000;


// Middleware
app.use(express.json());
app.use(cors());


// database connection
mongoose.connect("mongodb://127.0.0.1:27017/fakeForm")
.then(() => {
    console.log("Database connected");
    })
.catch(()=>{
    console.log("Database not connected");
})


// routes

const routes = require("./routes/routes")
app.use("/api", routes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})