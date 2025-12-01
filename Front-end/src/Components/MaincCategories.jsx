import { Link } from "react-router-dom";

function MainCategories() {
    return(
     <>
        <div className="w-[95%] max-w-6xl mx-auto bg-white p-3 md:p-4 rounded-full mt-10 flex justify-center items-center text-black gap-4 xl:gap-0">
     <div className="flex flex-wrap sm:flex-wrap xl:flex-wrap justify-center xl:justify-start xl:flex-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 overflow-x-auto scrollbar-hide w-fit max-w-full">
      <Link to="/post" className="bg-black px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 text-white rounded-full  flex-shrink-0 text-center">All Post</Link>
      <Link to="/post?category=web-design" className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Web Design</Link>
      <Link to="/post?category=development" className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Development</Link>
      <Link to="/post?category=databases" className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Databases</Link>
      <Link to="/post?category=search-engines" className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center hidden md:block">Search Engines</Link>
      <Link to="/post?category=marketing" className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Marketing</Link>
</div>
    <div className="text-black bg-gray-200 px-3 py-2 md:px-4 rounded-full flex items-center gap-2 md:gap-3 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] focus-within:bg-gray-300/60 focus-within:ring-2 focus-within:ring-black transition-all duration-200 flex-shrink-0">
     <svg className="w-4 h-4 md:w-5 md:h-5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
     </svg>
     <input 
       type="text" 
       placeholder="Search..." 
       className="bg-transparent outline-none focus:outline-none flex-1 text-gray-700 placeholder-gray-500 text-xs sm:text-sm md:text-base min-w-0"
     />
    </div>


  </div>
  </>
    )
}
export default MainCategories;