import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Comment from "./Comment.jsx";

const fetchComments = async (postId)=>{
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`);
  return res.data;
}

function Comments(postId) {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  if (isPending) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">An error occurred: {error.message}</div>;
  if (!data) return <div className="text-white">No comments found.</div>;



    return(
        <>
        <div className="">
            <div className="unica-one-regular flex flex-col gap-8 lg:w-4/5">
            <h1>Comments</h1>
            <div className="flex gap-3">
                <div className="w-4/5 flex flex-col">
                <textarea placeholder="Write a comment..." className="w-full h-25 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white" rows="4"></textarea>  
                </div>
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2 h-fit hover:bg-white hover:text-blue-500">Send</button>  
            </div>
            {data.map((comment)=>(
                <Comment key={comment._id} comment={comment} />
            ))}
            </div>
        </div>
        </>
    )
}
export default Comments;