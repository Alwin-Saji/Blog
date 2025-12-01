import PostList from "../Components/PostList";
import SideMenu from "../Components/SideMenu";
import { useState } from "react";

function PostListPage(){

  const [open, setOpen] = useState(false);

    return(
      <>
      <div className="text-white unica-one-regular">
        <h1 className="mb-8 text-2xl">Development Blog</h1>
       <button onClick={() => setOpen(!open)} className="md:hidden bg-gray-800 text-sm text-white rounded-xl px-4 py-2 ">{open ? "Close" : "Filter or Search" }</button>
        <div className="flex flex-col-reverse md:flex-row gap-8">
          
            <div className="">
                <PostList />
            </div>

            <div className={`${open ? "block" : "hidden"} md:block md:w-1/4`}>
              <SideMenu />
            </div>

        </div>
      </div>
      
      </>

    )
}

export default PostListPage;