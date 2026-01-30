import ImageComponent from "../Components/Image.jsx";
import { Link } from "react-router-dom";
import PostMenuAction from "../Components/PostMenuAction.jsx";
import Search from "../Components/Search.jsx";
import Comments from "../Components/Comments.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const stripHtml = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const fetchPosts = async (slug)=>{
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
}

function SinglePostPage() {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPosts(slug),
  });

  if (isPending) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">An error occurred: {error.message}</div>;
  if (!data) return <div className="text-white">No post found.</div>;

  return (
    <>
        <div className="mt-5 px-11 flex gap-5 text-white text-lg unica-one-regular">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <span>•</span>
        <span className="hover:cursor-default text-white/40">Post</span>
      </div>
    <div className="flex flex-col gap-4 text-white p-5 px-10 unica-one-regular">
      {/* details  */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <Link className="text-4xl lg:text-5xl">{data.title}</Link>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="hover:underline text-blue-400" to="/">{data.user?.username}</Link>
          <span>on</span>
          <Link to={`/postlistpage?cat=${data.category}`} className="hover:underline text-blue-400">{data.category}</Link>
          <span>•</span>
          <span>{format(data.createdAt)}</span>
          </div>
        <p className="text-xl font-sans text-justify">{data.desc}</p>
        </div>
        <div className="hidden md:flex w-2/5 justify-end items-center">
          <ImageComponent src={data.img} className="w-1/2 rounded-3xl" />
        </div>         
      </div>

     <div className="flex">
   <div className="w-4/5 mt-10 font-sans text-lg lg:text-xl leading-8 flex flex-col gap-6">
   <p className="text-xl font-sans text-justify break-words">{stripHtml(data.content) || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos dolore earum pariatur dolor, ab, incidunt nisi, voluptatibus sunt veritatis facere expedita quis consequuntur commodi temporibus placeat omnis illo soluta odio eius vel delectus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem repellendus porro reprehenderit voluptas ullam sapiente incidunt odio earum commodi officia, nam repellat a inventore consequatur dolor, explicabo nihil eaque veritatis minus recusandae eos odit rerum possimus ducimus? Totam, rem reiciendis. Amet repellat quia accusantium repudiandae excepturi iusto laboriosam fugiat, dolorem tempore laborum illo quam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt temporibus necessitatibus adipisci voluptate deserunt velit nisi architecto totam aliquam? Veniam itaque ea eaque consequatur rerum soluta nemo consequuntur magni saepe delectus.'}</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos dolore earum pariatur dolor, ab, incidunt nisi, voluptatibus sunt veritatis facere expedita quis consequuntur commodi temporibus placeat omnis illo soluta odio eius vel delectus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem repellendus porro reprehenderit voluptas ullam sapiente incidunt odio earum commodi officia, nam repellat a inventore consequatur dolor, explicabo nihil eaque veritatis minus recusandae eos odit rerum possimus ducimus? Totam, rem reiciendis. Amet repellat quia accusantium repudiandae excepturi iusto laboriosam fugiat, dolorem tempore laborum illo quam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt temporibus necessitatibus adipisci voluptate deserunt velit nisi architecto totam aliquam? Veniam itaque ea eaque consequatur rerum soluta nemo consequuntur magni saepe delectus.</p>

   </div>

   <div className="w-1/5 flex flex-col gap-2 px-4 h-max sticky top-8">
    <h1 className="font-bold text-xl">Author</h1>
    <div className="flex flex-col gap-3 ">
      {data.user?.img &&<ImageComponent src={data.user.img} className="w-full rounded-2xl object-cover" />}
   <Link to="/">{data.user?.username}</Link>
   <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea id culpa harum velit, saepe repudiandae dolor debitis dignissimos? Laborum.</p>
   <div className="flex gap-2">
    <Link to="/">
    <ImageComponent src="linkdin.png" className="w-8 h-8" alt="LinkedIn" /> </Link>
    <Link to="/">
    <ImageComponent src="instagram.jpeg" className="w-8 h-8" alt="Instagram" /> </Link>
   </div>
    </div>
   <PostMenuAction post={data} />
   <div className="flex flex-col gap-3 px-4">
   <h1 className="text-left text-xl  ">Categories</h1>

   <div className="flex flex-col text-gray-200/40 gap-2">
    <Link className="underline hover:text-white" to="/">All</Link>
    <Link className="underline hover:text-white" to="/">Web Design</Link>
    <Link className="underline hover:text-white" to="/">Development</Link>
    <Link className="underline hover:text-white" to="/">Databases</Link>
    <Link className="underline hover:text-white" to="/">Search Engines</Link>
    <Link className="underline hover:text-white" to="/">Marketing</Link>
   </div>
   </div>

   <div className="px-4 flex flex-col gap-3">
   <h1 className="text-left text-xl">Search</h1>
   <Search />
   </div>    
   </div>
      </div> 

   <Comments postId={data._id} />
    </div>
    </>
  );
}
export default SinglePostPage;