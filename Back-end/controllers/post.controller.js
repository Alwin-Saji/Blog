import { parse } from "dotenv";
import postModel from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";

export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const posts = await postModel.find()
  .populate("user","username")
  .limit(limit)
  .skip((page - 1) * limit);
 
  const totalPosts = await postModel.countDocuments();
  const hasmore = page * limit < totalPosts;

  res.status(200).json({posts,hasmore});

};

export const getPost = async (req, res) => {
  const post = await postModel.findOne({slug:req.params.slug}).populate(
    "user",
    "username img");
  res.status(200).json(post);
};
export const createPost = async (req, res) => {
    const clerkUserId= req.auth.userId;
    
    if(!clerkUserId){
        return res.status(404).json("Not Authenticated");
    }

    const user= await User.findOne({clerkUserId});

    if(!user){
        return res.status(404).json("User not found(from create post)");
    }

    if (!req.body.title) {
        return res.status(400).json("Title is required");
    }

    let slug = req.body.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    let existingPost = await postModel.findOne({ slug });
    
    let counter=2;

    while(existingPost){
        slug = `${slug}-${counter}`;
        existingPost = await postModel.findOne({ slug });
        counter++;
    }

    const newPost = new postModel({user:user._id,slug,...req.body});

    const post= await newPost.save();
    res.status(200).json(post);
};
export const deletePost = async (req, res) => {
   
  const clerkUserId= req.auth.userId;
    
    if(!clerkUserId){
        return res.status(404).json("User not found(from delete post)");
    }

    const user = await User.findOne({clerkUserId});

    if(!user){
      return res.status(404).json("User not found");
    }

    const deletedPost=await postModel.findOneAndDelete({
       _id: req.params.id,
        user: user._id });

   if(!deletedPost){
       return res.status(404).json("You are not authorized to delete this post");
   }

  res.status(200).send("Post Deleted Successfully");
};

const imagekit=new ImageKit({
   urlEndpoint:process.env.IK_URL_ENDPOINT,
   publicKey:process.env.IK_PUBLIC_KEY,
   privateKey:process.env.IK_PRIVATE_KEY,
});

export const uploadAuth= async (req,res)=>{
  const result=imagekit.getAuthenticationParameters();
  res.send(result);
}