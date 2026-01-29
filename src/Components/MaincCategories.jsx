import { Link } from "react-router-dom";
import Search from "./Search";

function MainCategories() {
    return(
     <>
        <div className="w-[95%] max-w-6xl mx-auto bg-white p-3 md:p-4 rounded-full mt-10 flex justify-center items-center text-black gap-4 xl:gap-0">
     <div className="flex flex-wrap sm:flex-wrap xl:flex-wrap justify-center xl:justify-start xl:flex-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 overflow-x-auto scrollbar-hide w-fit max-w-full">
      <Link to="/postlistpage" className="bg-black px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 text-white rounded-full  flex-shrink-0 text-center">All Post</Link>
      <Link to="/postlistpage?cat=web-design" className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Web Design</Link>
      <Link to="/postlistpage?cat=development" className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Development</Link>
      <Link to="/postlistpage?cat=databases" className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Databases</Link>
      <Link to="/postlistpage?cat=search-engines" className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center hidden md:block">Search Engines</Link>
      <Link to="/postlistpage?cat=marketing" className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Marketing</Link>
</div>

     <Search className="text-black bg-gray-200 focus-within:bg-gray-300/20 focus-within:ring-2 focus-within:ring-gray-200/80 transition-all duration-200 flex-shrink-0 px-3 py-2 md:px-4 rounded-full flex items-center gap-2 md:gap-3 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]"  />


  </div>
  </>
    )
}
export default MainCategories;