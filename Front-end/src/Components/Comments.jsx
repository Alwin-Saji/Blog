function Comments() {
    return(
        <>
        <div className="">
            <div className="unica-one-regular flex flex-col gap-8 lg:w-4/5">
            <h1>Comments</h1>
            <div className="flex gap-3">
                <div className="w-4/5 flex flex-col">
                <textarea placeholder="Write a comment..." className="w-full h-25 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white" rows="4"></textarea>  
                </div>
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2 h-fit hover:bg-white hover:text-blue-500">Send</button>  
            </div>
            </div>
        </div>
        </>
    )
}
export default Comments;