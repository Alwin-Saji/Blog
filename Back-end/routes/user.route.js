import express from "express";

const router = express.Router();

router.get("/userrouter", (req, res) => {
    res.status(200).send("user");
});

export default router;
