import express from "express";
import {port, mongoDBURL02 } from "./config.js";
import mongoose from "mongoose"
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});




mongoose.connect(mongoDBURL02)
.then(()=>{
    console.log("Connected to MongoDB successfully!");

    
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
})
.catch((value) => {
    console.error("Error connecting to MongoDB:", value);
})