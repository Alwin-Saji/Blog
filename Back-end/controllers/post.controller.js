import postModel from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {

  const posts = await postModel.find()
  res.status(200).json(posts);

};

export const getPost = async (req, res) => {
  const post = await postModel.findOne({slug:req.params.slug})
  res.status(200).json(post);
};
export const createPost = async (req, res) => {
    const clerkUserId= req.auth.userId;
    const user= await User.findOne({clerkUserId});

    if(!clerkUserId){
        return res.status(404).json("Not Authenticated");
    }
    
    if(!user){
        return res.status(404).json("User not found(from create post)");
    }

    const newPost = new postModel({user:user._id,...req.body});

    const post= await newPost.save();
    res.status(200).json(post);
};
export const deletePost = async (req, res) => {
   
  const clerkUserId= req.auth.userId;
    
    if(!clerkUserId){
        return res.status(404).json("User not found(from delete post)");
    }

    const user = await User.findOne({clerkUserId});

    const deletedPost=await postModel.findOneAndDelete({
       _id: req.params.id,
        user: user._id });

   if(!deletedPost){
       return res.status(404).json("You are not authorized to delete this post");
   }

  res.status(200).send("Post Deleted Successfully");
};

