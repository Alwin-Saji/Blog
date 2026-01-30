import { Link, useNavigate } from "react-router";
import MainCategories from "../Components/MaincCategories";
import FeaturedPost from "../Components/FeaturedPost";
import PostList from "../Components/PostList";
import SinglePostPage from "./SinglePostPage";



function Home() {
  return (
    <>    
    <div className="flex flex-col p-5 px-10 h-full w-full text-white unica-one-regular">
      <div className="flex gap-5 text-white text-lg unica-one-regular">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <span>•</span>
        <span className="hover:cursor-default text-white/40">Blogs and Articles</span>
      </div>
      <div className="flex justify-between">
        <div className="mt-10 flex flex-col gap-6 text-white">
      <h1 className="text-xl font-bold">Welcome to Dev Hive</h1>
       <p className="lg:w-[70vw] w-[65vw] text-lg text-justify text-white/80">Discover a vibrant community of developers, writers, and creators sharing their knowledge, experiences, and innovative ideas. From beginner tutorials to advanced techniques, find inspiration and learn something new every day.</p>
      </div>
 
  <div className="relative hidden sm:block ">
    <svg viewBox="0 0 200 200" width={200} height={200} className="text-lg animate-spin animatedbutton  ">
      <path id="circlepath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
    <text className="fill-white ">
      <textPath href="#circlepath" startOffset="0%" className=" tracking-[4px]">Write your Story </textPath>
      <textPath href="#circlepath" startOffset="50%" className=" tracking-[4px]">Share your ideas</textPath>
    </text>
    </svg>
    <Link to="/write" className="absolute top-0 bottom-0 inset-0 flex items-center justify-center transition-all duration-300 hover:opacity-80 group">   
      <svg className="w-50 h-50 absolute top-0 bottom-0 transition-all duration-500 " viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="10" stroke="white" strokeWidth=".4" className="transition-all duration-300 ease-in-out group-hover:stroke-sky-600/20"/>
        <text x="18" y="23" textAnchor="middle" fill="white" className="transition-all duration-300 ease-in-out group-hover:fill-cyan-300">+</text>
      </svg>
    </Link>
  </div>
    </div>
  <MainCategories />
  <FeaturedPost />
  <div className="md:mt-6">
  <PostList />
  </div>




    </div>
    </>
  );
}
export default Home;