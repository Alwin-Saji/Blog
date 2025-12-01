import express from "express";

const comment = express.Router();

comment.get("/comment", (req, res) => {
    res.status(200).send("comment");
});

export default comment;
