// import { Link } from "react-router-dom";
// import Search from "./Search";

// function MainCategories() {
//     return(
//      <>
//         <div className="w-full max-w-6xl mx-auto bg-white p-3 md:p-4 rounded-full mt-10 flex flex-col justify-center items-center text-black gap-3">
//      <div className="grid grid-cols-4 md:flex md:justify-start w-full text-xs md:text-lg gap-2 overflow-x-auto scrollbar-hide px-2">
//       <Link to="/postlistpage" className="bg-black px-2 py-1 sm:px-3 sm:py-2 text-white rounded-full flex-shrink-0 text-center whitespace-nowrap">All Post</Link>
//       <Link to="/postlistpage?cat=web-design" className="px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Web Design</Link>
//       <Link to="/postlistpage?cat=development" className="px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Development</Link>
//       <Link to="/postlistpage?cat=databases" className="px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Databases</Link>
//       <Link to="/postlistpage?cat=search-engines" className="px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Search Engines</Link>
//       <Link to="/postlistpage?cat=marketing" className="px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-gray-200 whitespace-nowrap flex-shrink-0 text-center">Marketing</Link>
// </div>

//      <Search className="text-black bg-gray-200 focus-within:bg-gray-300/20 focus-within:ring-2 focus-within:ring-gray-200/80 transition-all duration-200 flex-shrink-0 px-3 py-2 rounded-full flex items-center gap-2 w-full sm:w-[180px] md:w-[200px] lg:w-[220px]"  />


//   </div>
//   </>
//     )
// }

// export default MainCategories;

import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-2 shadow-lg items-center justify-center gap-4">
      {/* links */}
      <div className="flex-1 flex items-center text-black justify-between flex-wrap">
        <Link
          to="/postlistpage"
          className="bg-black text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/postlistpage?cat=web-design"
          className="hover:bg-black/90 hover:text-white rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/postlistpage?cat=development"
          className="hover:bg-black/90 hover:text-white rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/postlistpage?cat=databases"
          className="hover:bg-black/90 hover:text-white rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/postlistpage?cat=seo"
          className="hover:bg-black/90 hover:text-white rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/postlistpage?cat=marketing"
          className="hover:bg-black/90 hover:text-white rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search className="text-black bg-gray-200 focus-within:bg-gray-300/20 focus-within:ring-2 focus-within:ring-black transition-all duration-200 flex-shrink-0 px-3 py-2 rounded-full flex items-center gap-2 w-full sm:w-[180px] md:w-[200px] lg:w-[220px]"  />
    </div>
  );
};

export default MainCategories;