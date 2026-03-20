import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    author: {
        type: String,
        required: true        
    },
    publishyear: {
        type: Number,
        required: true
    }
},{timestamps: true});

export const Book = mongoose.model("cat", booksSchema);  