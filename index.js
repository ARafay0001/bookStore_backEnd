import express from "express";
import {port} from "./config.js";

const app = express();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
});