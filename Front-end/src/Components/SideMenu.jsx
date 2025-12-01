import Search from "./Search.jsx";
import { Link } from "react-router-dom";

function SideMenu() {
    return(
        <>
        <div className="">
            <h1 className="mb-4 text-sm font-medium">Search</h1>
            < Search />
            <h1 className="mb-8 mt-8 text-sm font-medium">Filter</h1>
            <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="" className="flex items-center gap-2">
                    <input type="radio" name="sort" value="newest" className="bg-white cursor-pointer appearance-none checked:bg-blue-500 checked:border-transparent border rounded-sm w-4 h-4" />
                Newest
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                    <input type="radio" name="sort" value="most-popular" className="bg-white cursor-pointer appearance-none checked:bg-blue-500 checked:border-transparent border rounded-sm w-4 h-4" />
                Most Popular
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                    <input type="radio" name="sort" value="trending" className="bg-white cursor-pointer appearance-none checked:bg-blue-500 checked:border-transparent border rounded-sm w-4 h-4" />
                Trending
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                    <input type="radio" name="sort" value="oldest" className="bg-white cursor-pointer appearance-none checked:bg-blue-500 checked:border-transparent border rounded-sm w-4 h-4" />
                Oldest
                </label>
            </div>

            <div className="mt-5">               
            <h1 className="mb-8 text-md font-bold">Categories</h1>
       <div className="flex flex-col gap-2 text-sm">
            <Link className="underline text-white/60 hover:text-white" to="/posts">All</Link>
            <Link className="underline text-white/60 hover:text-white" to="/posts/?cat=web-design">Web Design</Link>
            <Link className="underline text-white/60 hover:text-white" to="/posts/?cat=development">Development</Link>
            <Link className="underline text-white/60 hover:text-white" to="/posts/?cat=databases">Databases</Link>
            <Link className="underline text-white/60 hover:text-white" to="/posts/?cat=search-engines">Search Engines</Link>
            <Link className="underline text-white/60 hover:text-white" to="/posts/?cat=marketing">Marketing</Link>
       </div>
            </div>
        </div>
        
        </>
    )
}
export default SideMenu;