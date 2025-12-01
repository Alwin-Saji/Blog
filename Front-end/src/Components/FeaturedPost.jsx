import ImageComponent from "./Image";
import Stock from "../assets/images/stock1.jpeg";
import { Link } from "react-router-dom";


function FeaturedPost() {
    return(
        <>
        <div className="mt-8 w-[92vw] m-auto flex flex-col lg:flex-row gap-8">

            {/* first */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {/* image */}
              <ImageComponent src={Stock} className="rounded-3xl object-cover" />
              {/* details */}
              <div className="flex gap-2 text-lg">
              <h1>01.</h1>
              <Link>Web Design </Link>
              <span>•</span>
              <span>2 days ago</span>
              </div>
            {/* title */}
            <Link to="/test" className="text-lg" >Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi aperiam ratione quod doloribus praesentium, quisquam odit minus quia amet. ipsum dolor sit amet consectetur adipisicing elit. Rem, ipsum?</Link>
            </div>
             {/* others */}
             <div className="w-full lg:w-1/2 flex flex-col gap-8 px-4">
              {/* second */}
               <div className="lg:h-1/3 flex flex-row gap-4"> 
              <ImageComponent src={Stock} className="md:w-1/2 rounded-3xl aspect-video" />
              
             {/* details and titles */}
             <div className="w-2/3 flex flex-col gap-5 lg:text-lg">
             {/* details */}
             <div className="flex gap-2">
                <h1>02.</h1>
                <Link>Web Design </Link>
                <span>•</span>
                <span>3 days ago</span>
             </div>
             {/* titles */}
             <Link to="/test">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum animi libero magni excepturi mollitia neque.</Link>
             </div>
             </div>
              {/* third */}
              <div className="lg:h-1/3 flex flex-row gap-4"> 
              <ImageComponent src={Stock} className="md:w-1/2 rounded-3xl aspect-video" />
              
             {/* details and titles */}
             <div className="w-2/3 flex flex-col gap-5 lg:text-lg">
             {/* details */}
             <div className="flex gap-2">
                <h1>03.</h1>
                <Link>Web Design </Link>
                <span>•</span>
                <span>3 days ago</span>
             </div>
             {/* titles */}
             <Link to="/test">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum animi libero magni excepturi mollitia neque.</Link>
             </div>
             </div>
                
                
                {/* fourth */}
 <div className="lg:h-1/3 flex flex-row  gap-4"> 
              <ImageComponent src={Stock} className="md:w-1/2 rounded-3xl aspect-video" />
              
             {/* details and titles */}
             <div className="w-2/3 flex flex-col gap-5 lg:text-lg">
             {/* details */}
             <div className="flex gap-2">
                <h1>04.</h1>
                <Link>Web Design </Link>
                <span>•</span>
                <span>5 days ago</span>
             </div>
             {/* titles */}
             <Link to="/test">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum animi libero magni excepturi mollitia neque.</Link>
             </div>
             </div>
             </div>

             </div>
        
        </>
    )
}
export default FeaturedPost;