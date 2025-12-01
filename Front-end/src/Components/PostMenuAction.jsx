
function PostMenuAction() {
    return(
        <>
         <div className="flex flex-col gap-4 p-4 sticky top-8">
          <h1 className="text-xl">Actions</h1>
          <div className="flex gap-4 items-center hover:cursor-pointer group hover:text-green-400 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
               <path d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z" 
               stroke="white" className="group-hover:stroke-green-200"
               fill="none"
               strokeWidth={2}
               />
            </svg>

            <span>Save this Post</span>
            </div> 
          <div className="flex gap-4 items-center hover:cursor-pointer group hover:text-red-400 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
               <path d="M 21 2 C 19.354545 2 18 3.354545 18 5 L 18 6 L 10 6 C 8.3431458 6 7 7.3431458 7 9 L 7 40 C 7 41.656855 8.3431458 43 10 43 L 38 43 C 39.656855 43 41 41.656855 41 40 L 41 9 C 41 7.3431458 39.656855 6 38 6 L 30 6 L 30 5 C 30 3.3545452 28.645455 2 27 2 L 21 2 z M 21 6 L 27 6 L 27 5 L 21 5 L 21 6 z M 10 9 L 38 9 L 38 40 L 10 40 L 10 9 z M16.5,17 C15.119288,17,14,18.119288,14,19.5 C14,20.880712,15.119288,22,16.5,22 C17.880712,22,19,20.880712,19,19.5 C19,18.119288,17.880712,17,16.5,17 z M24,17 C22.619288,17,21.5,18.119288,21.5,19.5 C21.5,20.880712,22.619288,22,24,22 C25.380712,22,26.5,20.880712,26.5,19.5 C26.5,18.119288,25.380712,17,24,17 z M31.5,17 C30.119288,17,29,18.119288,29,19.5 C29,20.880712,30.119288,22,31.5,22 C32.880712,22,34,20.880712,34,19.5 C34,18.119288,32.880712,17,31.5,17 z" 
               stroke="white" className="group-hover:stroke-red-400"
               fill="none"
               strokeWidth={2}
               />
            </svg>

            <span>Delete this Post</span>
            </div> 

         </div>
        </>
    )
}
export default PostMenuAction;