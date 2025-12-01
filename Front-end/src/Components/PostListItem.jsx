import ImageComponent from "./Image.jsx";
import Stock from "../assets/images/stock1.jpeg";
import { Link } from "react-router-dom";

function PostListItem() {
    return(
        <>
         <div className="px-10 mt-10 flex flex-col xl:flex-row gap-8">
         {/* image  */}
         <div className="md:hidden w-full sm:w-1/2 xl:block">
            <ImageComponent src={Stock} className="w-full sm:w-[90vw] h-auto m-auto rounded-3xl object-cover" />
         </div>
        {/* details  */}
       <div className="flex flex-col gap-4">
        <Link className="text-3xl" to="/test">Lorem ipsum dolor unde quasi repellendus quis a cum.</Link>
        <div className="flex items-center gap-4 text-gray-400 text-xs">
            <span>Written by</span>
            <Link to="/test" className="text-blue-500 hover:underline">John Doc</Link>
            <span>on</span>
            <Link className="text-blue-500 hover:underline" to="/test">Web Design</Link>
            <span>•</span>
            <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas harum repellat ipsum in id eveniet, molestiae adipisci sequi! Ipsum minima neque, ex quos doloremque, facilis repudiandae enim recusandae, fugiat quidem ut.</p>
  </div>
       </div>
        </>
    )
}
export default PostListItem;