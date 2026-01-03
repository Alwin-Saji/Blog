import axios from "axios";
import ImageComponent from "./Image.jsx";
import { Link, useParams } from "react-router-dom";
import {format} from "timeago.js";
import { use } from "react";
import { useQuery } from "@tanstack/react-query";

function PostListItem({post}) {


    return(
        <>
         <div className="px-10 mb-10 flex flex-col xl:flex-row gap-8">
         {/* image  */}
         {post.img && (<div className="md:hidden xl:w-1/3 xl:block ">
            <ImageComponent src={post.img} className="rounded-3xl object-cover" w="535" />
         </div>)}
        {/* details  */}
       <div className="flex flex-col gap-4 xl:w-2/3">
        <Link className="text-3xl" to={`/post/${post.slug}`}>{post.title}</Link>
        <div className="flex items-center gap-4 text-gray-400 text-xs">
            <span>Written by</span>
            <Link to={`/${post.slug}`} className="text-blue-500 hover:underline">{post.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-500 hover:underline" to="/test">{post.category}</Link>
            <span>•</span>
            <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
         <Link className="text-sm underline text-blue-200 hover:text-blue-600" to={`/post/${post.slug}`}>Read More</Link>
  </div>
       </div>
        </>
    )
}
export default PostListItem;