import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import Comment from "./Comment.jsx";
import { toast } from "react-toastify";

const fetchComments = async (postId)=>{
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`);
  return res.data;
}


function Comments({postId}) {
  
  const { user } = useUser();
  const { getToken } = useAuth();
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

    const queryClient = useQueryClient();

    const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`,
       newComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["comments", postId]});
    },
    onError:(error)=>{
      if(!user){
        toast.error("You must be logged in to add a comment.");
      }
      else{
      toast.error("Failed to add comment: " + error.message);}
    }
  });

  if (isPending) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">An error occurred: {error.message}</div>;
  if (!data) return <div className="text-white">No comments found.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.info("Please login to comment");
      return;
    }
    const formData = new FormData(e.target);

    const data = {
     desc: formData.get('desc'),
    };
    mutation.mutate(data);
  }

    return(
        <>
        <div className="">
            <div className="unica-one-regular flex flex-col gap-8 lg:w-4/5">
            <h1>Comments</h1>
            <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="w-4/5 flex flex-col">
                <textarea name="desc" placeholder="Write a comment..." className="w-full h-25 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white" rows="4"></textarea>  
                </div>
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2 h-fit hover:bg-white hover:text-blue-500">Send</button>  
            </form>
  
            {isPending
             ? "Loading..." 
             : error 
             ?`An error occurred: ${error.message}` 
             : 
             <>
             {
              mutation.isPending && (
                <Comment comment={{
                  desc:`${mutation.variables.desc ?? ""} {Sending...} `,
                  createdAt:new Date(),
                  user:{
                    img:user.imageUrl,
                    username:user.username
                  }
                }}  />
              )
             }
             {data.map((comment)=>(
                <Comment key={comment._id} comment={comment} postId={postId} />
            ))}
             
             </>
            }
            </div>
        </div>
        </>
    )
}
export default Comments;