import ImageComponent from "./Image";
import Stock from "../assets/images/stock1.jpeg";
import { format } from "timeago.js";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function Comment({comment,postId}){
  
  const { user } = useUser();
  const { getToken } = useAuth();
  const role= user?.publicMetadata?.role;

   const queryClient = useQueryClient();

    const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return axios.delete(`${import.meta.env.VITE_API_URL}/comments/${comment._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["comments", postId]});
      toast.success("Comment deleted successfully");
    },
    onError:(error)=>{
      toast.error("Failed to delete comment: " + error.message);
    }
  });

    return(
        <>
        <div className="p-4 bg-slate-900/40 unica-one-regular rounded-xl mb-8">
            <div  className="flex items-center cursor-default gap-4">
                { comment.user.img &&
                <ImageComponent src={comment.user.img}
             alt="User Image" 
                className="w-10 h-10 hover:scale-105 transition-transform duration-300 rounded-full object-cover" />}
                <span className="font-semibold hover:text-blue-400">{comment.user.username}</span>
                <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
                {

                user && (role==="admin" || comment.user.username===user.username) &&
                (mutation.isPending ? (
                    <span className="ml-auto border border-transparent hover:border-red-500 text-red-500 font-semibold cursor-default">Deleting...</span>
                ) : (
                    <span className="ml-auto p-2 rounded-xl border border-transparent hover:border-red-500 text-red-400/50 font-semibold cursor-pointer hover:text-red-500"
                    onClick={()=>mutation.mutate()}
                    >
                    Delete
                    </span>
                ))} 
            </div>
            <div className="mb-4">
                <p className="mt-2 text-white">{comment.desc}</p>
            </div>
        </div>
        </>
    )
}
export default Comment;