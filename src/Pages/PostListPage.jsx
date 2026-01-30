import PostList from "../Components/PostList";
import SideMenu from "../Components/SideMenu";
import { useState } from "react";

function PostListPage(){

  const [open, setOpen] = useState(false);

    return(
      <>
      <div className="text-white unica-one-regular mt-6">
       <button onClick={() => setOpen(!open)} className="md:hidden bg-gray-800 text-sm text-white rounded-xl px-4 py-2 flex justify-center mx-auto mb-4 mt-4 items-start block">{open ? "Close" : "Filter / Search" }</button>
        <div className="flex flex-col-reverse md:flex-row gap-8">
          
            <div className="">
                <PostList />
            </div>

            <div className={`${open ? "block" : "hidden"} md:block md:w-1/4 w-[80vw] m-auto md:m-0 md:mt-6 `}>
              <SideMenu />
            </div>

        </div>
      </div>
      
      </>

    )
}

export default PostListPage;