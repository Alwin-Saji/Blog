import ImageComponent from "../Components/Image";
import Stock from "../assets/images/stock1.jpeg";
import { Link } from "react-router-dom";
import LinkdIn from "../assets/images/linkdin.png"
import Instagram from "../assets/images/instagram.jpeg"
import PostMenuAction from "../Components/PostMenuAction";
import Search from "../Components/Search.jsx";
import Comments from "../Components/Comments.jsx";
import Comment from "../Components/Comment.jsx";


function Post() {
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
          <h1 className="text-4xl lg:text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="hover:underline text-blue-400">John Doe</Link>
          <span>on</span>
          <Link className="hover:underline text-blue-400">Web Design</Link>
          <span>•</span>
          <span>2 hours ago</span>
          </div>
        <p className="text-xl font-sans text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis saepe reprehenderit totam modi ex voluptatum, debitis vero maxime iure sapiente atque harum eveniet voluptas corrupti dolorem obcaecati, odio et voluptates impedit molestias. Blanditiis, inventore.</p>
        </div>
        <div className="hidden lg:block w-2/5 m-auto">
          <ImageComponent src={Stock} className="w-full rounded-3xl object-cover" />
        </div>         
      </div>

     <div className="flex">
   <div className="w-4/5 mt-10 font-sans text-justify text-lg lg:text-xl leading-8 flex flex-col gap-6">
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos dolore earum pariatur dolor, ab, incidunt nisi, voluptatibus sunt veritatis facere expedita quis consequuntur commodi temporibus placeat omnis illo soluta odio eius vel delectus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem repellendus porro reprehenderit voluptas ullam sapiente incidunt odio earum commodi officia, nam repellat a inventore consequatur dolor, explicabo nihil eaque veritatis minus recusandae eos odit rerum possimus ducimus? Totam, rem reiciendis. Amet repellat quia accusantium repudiandae excepturi iusto laboriosam fugiat, dolorem tempore laborum illo quam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt temporibus necessitatibus adipisci voluptate deserunt velit nisi architecto totam aliquam? Veniam itaque ea eaque consequatur rerum soluta nemo consequuntur magni saepe delectus.</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos dolore earum pariatur dolor, ab, incidunt nisi, voluptatibus sunt veritatis facere expedita quis consequuntur commodi temporibus placeat omnis illo soluta odio eius vel delectus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem repellendus porro reprehenderit voluptas ullam sapiente incidunt odio earum commodi officia, nam repellat a inventore consequatur dolor, explicabo nihil eaque veritatis minus recusandae eos odit rerum possimus ducimus? Totam, rem reiciendis. Amet repellat quia accusantium repudiandae excepturi iusto laboriosam fugiat, dolorem tempore laborum illo quam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt temporibus necessitatibus adipisci voluptate deserunt velit nisi architecto totam aliquam? Veniam itaque ea eaque consequatur rerum soluta nemo consequuntur magni saepe delectus.</p>
   <Comments />
    <Comment />
    <Comment />
    <Comment />
    <Comment />
    <Comment />

   </div>

   <div className="w-1/5 flex flex-col gap-2 px-4 h-max sticky top-8">
    <h1 className="font-bold text-xl">Author</h1>
    <div className="flex flex-col gap-3 ">
      <ImageComponent src={Stock} className="w-full rounded-2xl object-cover" />
   <Link>John Doc</Link>
   <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea id culpa harum velit, saepe repudiandae dolor debitis dignissimos? Laborum.</p>
   <div className="flex gap-2">
    <Link>
    <ImageComponent src={LinkdIn} h={32} w={32} /> </Link>
    <Link>
    <ImageComponent src={Instagram} h={32} w={32} /> </Link>
   </div>
    </div>
   <PostMenuAction />
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


    </div>
    </>
  );
}
export default Post;