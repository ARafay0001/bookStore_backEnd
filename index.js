import express from "express";
import {port, mongoDBURL02 } from "./config.js";
import mongoose from "mongoose"
const app = express();
import { Book } from "./models/bookmodel.js";

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// route for sasve a new book
app.post('/books', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishyear) {
            return res.status(400).json({
                error: 'Title, author, and publish year are required'
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishyear: req.body.publishyear
        };

        const savedBook = await Book.create(newBook);
        return res.status(201).json(savedBook);

    } catch (error) {
        return res.status(500).json({
            error: 'Failed to save the book'
        });
    }
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