import Comment from "../models/comment.model.js";

export const getPostcomments = async (req,res)=>{
    const comments = await Comment.find({postId:req.params.postId})
    .populate("user","username img")
    .sort({createdAt:-1});

    res.json(comments);
}


export const addcomments = (req,res)=>{}

export const deletecomments = (req,res)=>{}