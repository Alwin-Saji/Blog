import { use } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

function Search({className}){

   const location=useLocation();
   const navigate=useNavigate();
   const [searchParams, setSearchParams] = useSearchParams();

   const handleKeyPress=(e)=>{
       if(e.key === 'Enter'){
           const query=e.target.value;
       if(location.pathname === '/postlistpage'){  
            setSearchParams({...Object.fromEntries([...searchParams]),searchQuery:query});
       }else{
            navigate(`/postlistpage?searchQuery=${query}`);
       }  
   }
  }
    return(
        <>
    <div className={className || "text-white bg-gray-200 px-3 py-2 md:px-4 rounded-full flex items-center gap-2 md:gap-3 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] focus-within:bg-gray-300/20 focus-within:ring-2 focus-within:ring-gray-200/80 transition-all duration-200 flex-shrink-0"}>
     <svg className="w-4 h-4 md:w-5 md:h-5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
     </svg>
     <input 
       type="text" 
       placeholder="Search..." 
       className="bg-transparent outline-none focus:outline-none flex-1 text-inherit placeholder-gray-500 text-xs sm:text-sm md:text-base min-w-0"
       onKeyDown={handleKeyPress}
     />
    </div>
        </>
    )
}

export default Search;