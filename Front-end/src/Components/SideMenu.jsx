import Search from "./Search.jsx";
import { Link, useSearchParams } from "react-router-dom";

function SideMenu() {

    const [searchParams,setSearchParams]=useSearchParams();

    const handleFilterChange=(e)=>{
        if(searchParams.get("sort") !== e.target.value){
        setSearchParams({...Object.fromEntries(searchParams.entries()),
            sort:e.target.value});
    }}
    const handleCategoryChange = (cat) => {
        const params = { ...Object.fromEntries(searchParams.entries()) };
        // Remove 'category' if it exists
        if (params.category) delete params.category;
        if (cat === 'all') {
            // Remove 'cat' to show all posts
            if (params.cat) delete params.cat;
            setSearchParams(params);
        } else if (params.cat !== cat) {
            setSearchParams({ ...params, cat });
        }
    }

    
    return(
        <>
        <div className="">
            <h1 className="mb-4 text-sm font-medium">Search</h1>
            < Search />
            <h1 className="mb-8 mt-8 text-sm font-medium">Filter</h1>
            <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="" className="flex items-center gap-2">
                    <input type="radio"
                     name="sort"
                     onChange={handleFilterChange}
                     value="newest" 
                     className="bg-white cursor-pointer appearance-none checked:bg-blue-500 checked:border-transparent border rounded-sm w-4 h-4" />
                Newest
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                    <input type="radio" name="sort" value="popular" onChange={handleFilterChange} className="bg-white cursor-pointer appearance-none checked:bg-blue-500 checked:border-transparent border rounded-sm w-4 h-4" />
                Most Popular
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                    <input type="radio" name="sort" value="trending" onChange={handleFilterChange} className="bg-white cursor-pointer appearance-none checked:bg-blue-500 checked:border-transparent border rounded-sm w-4 h-4" />
                Trending
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                    <input type="radio" name="sort" value="oldest" onChange={handleFilterChange} className="bg-white cursor-pointer appearance-none checked:bg-blue-500 checked:border-transparent border rounded-sm w-4 h-4" />
                Oldest
                </label>
            </div>

            <div className="mt-5">               
            <h1 className="mb-8 text-md font-bold">Categories</h1>
       <div className="flex flex-col gap-2 text-sm cursor-pointer">
            <span className="underline text-white/60 hover:text-white" onClick={()=>handleCategoryChange("all")}>All</span>
            <span className="underline text-white/60 hover:text-white" onClick={()=>handleCategoryChange("web-design")}>Web Design</span>
            <span className="underline text-white/60 hover:text-white" onClick={()=>handleCategoryChange("development")}>Development</span>
            <span className="underline text-white/60 hover:text-white" onClick={()=>handleCategoryChange("databases")}>Databases</span>
            <span className="underline text-white/60 hover:text-white" onClick={()=>handleCategoryChange("search-engines")}>Search Engines</span>
            <span className="underline text-white/60 hover:text-white" onClick={()=>handleCategoryChange("marketing")}>Marketing</span>
       </div>
            </div>
        </div>
        
        </>
    )
}
export default SideMenu;