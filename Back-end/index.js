import express from 'express';
import connectDB from './lib/connectDB.js';
import dotenv from 'dotenv';
import userrouter from './routes/user.route.js';
import postrouter from './routes/post.route.js';
import commentrouter from './routes/comment.route.js';
import webhookrouter from './routes/webhook.route.js';
import { clerkClient, clerkMiddleware, getAuth, requireAuth } from '@clerk/express'
import { get } from 'mongoose';
import cors from 'cors';

// Load environment variables
dotenv.config();  


const app=express();
app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());
app.use('/webhooks', webhookrouter);
app.use(express.json());


// app.get('/test', (req, res) => {
//     res.status(200).send("Good Job");

// })


// app.get("/auth-state", (req, res) => {
//     const authState= req.auth;
//     res.json(authState);
// });

// app.get("/protect", (req, res) => {
//     const {userId}= req.auth;
//     if(!userId){
//         return res.status(401).json({message:"Unauthorized"});
//     }
//     res.status(200).json("content");
// });

// app.get("/protect2",requireAuth(), (req, res) => {
//     const {userId}= req.auth;
//     res.status(200).json("content");
// });

app.use('/users', userrouter);
app.use('/posts', postrouter);
app.use('/comments', commentrouter);

app.use((err, req, res, next) => {
   
    res.status(err.status || 500);
   
    res.json({ message: err.message || "Something went wrong",
        status: err.status,
        stack: err.stack
     });
});

app.listen(3000,  ()=>{
    connectDB();
     console.log("Server is running on port 3000");
})