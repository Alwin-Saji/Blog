import ImageComponent from "./Image";
import Stock from "../assets/images/stock1.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";


const fetchPosts = async ()=>{
const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`);
return res.data;
}


function FeaturedPost() {


  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchPosts(),
  });

  if (isPending) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">An error occurred: {error.message}</div>;
  
  const posts=data.posts;
  if (!posts || posts.length===0) {
   return
   }


    return(
        <>
        <div className="mt-8 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">

            {/* first */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {/* image */}
              {posts[0].img &&
               <ImageComponent src={posts[0].img} className="rounded-3xl object-cover w-full h-48 md:h-64 lg:h-80" />
               }
              {/* details */}
              <div className="flex gap-2 text-sm md:text-lg">
              <h1>01.</h1>
              <Link>{posts[0].category}</Link>
              <span>•</span>
              <span>{format(posts[0].createdAt)}</span>
              </div>
            {/* title */}
            <Link to={`/post/${posts[0].slug}`} className="text-lg md:text-xl hover:text-blue-300" >{posts[0].title}</Link>
            <p className="text-sm md:text-base">{posts[0].desc.length > 170 ? posts[0].desc.substring(0, 170) + "..." : posts[0].desc}</p>
            </div>
             {/* others */}
             <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">

              {/* second */}
              {posts[1] && <div className="flex flex-col md:flex-row gap-4"> 
              <ImageComponent src={posts[1].img} className="w-full md:w-1/2 rounded-3xl aspect-video object-cover" />
              
             {/* details and titles */}
             <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-5 text-sm md:text-base">
             {/* details */}
             <div className="flex gap-2 text-xs md:text-sm">
                <h1>02.</h1>
                <Link>{posts[1].category}</Link>
                <span>•</span>
                <span>{format(posts[1].createdAt)}</span>
             </div>
             {/* titles */}
             <Link to={`/post/${posts[1].slug}`} className="hover:text-blue-300 text-sm md:text-base" >{posts[1].title}</Link>
             <p className="text-xs md:text-sm">{posts[1].desc.length > 100 ? posts[1].desc.substring(0, 100) + "..." : posts[1].desc}</p>
             </div>
             </div>
}
              {/* third */}
              {posts[2] && <div className="flex flex-col md:flex-row gap-4"> 
              <ImageComponent src={posts[2].img} className="w-full md:w-1/2 rounded-3xl aspect-video object-cover" />
              
             {/* details and titles */}
             <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-5 text-sm md:text-base">
             {/* details */}
             <div className="flex gap-2 text-xs md:text-sm">
                <h1>03.</h1>
                <Link>{posts[2].category}</Link>
                <span>•</span>
                <span>{format(posts[2].createdAt)}</span>
             </div>
             {/* titles */}
             <Link to={`/post/${posts[2].slug}`} className="hover:text-blue-300 text-sm md:text-base">{posts[2].title}</Link>
             <p className="text-xs md:text-sm">{posts[2].desc.length > 100 ? posts[2].desc.substring(0, 100) + "..." : posts[2].desc}</p>
             </div>
             </div>
}
                
                {/* fourth */}
              {posts[3] && <div className="flex flex-col md:flex-row gap-4"> 
              <ImageComponent src={posts[3].img} className="w-full md:w-1/2 rounded-3xl aspect-video object-cover" />
              
             {/* details and titles */}
             <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-5 text-sm md:text-base">
             {/* details */}
             <div className="flex gap-2 text-xs md:text-sm">
                <h1>04.</h1>
                <Link>{posts[3].category}</Link>
                <span>•</span>
                <span>{format(posts[3].createdAt)}</span>
             </div>
             {/* titles */}
             <Link to={`/post/${posts[3].slug}`} className="hover:text-blue-300 text-sm md:text-base" >{posts[3].title}</Link>
             <p className="text-xs md:text-sm">{posts[3].desc.length > 100 ? posts[3].desc.substring(0, 100) + "..." : posts[3].desc}</p>
             </div>
             </div>
             }
             
             </div>

             </div>
        
        </>
    )
}
export default FeaturedPost;