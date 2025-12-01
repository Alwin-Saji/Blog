import ImageComponent from "./Image";
import Stock from "../assets/images/stock1.jpeg";

function Comment() {
    return(
        <>
        <div className="p-4 bg-slate-900/40 unica-one-regular rounded-xl mb-8">
            <div  className="flex items-center cursor-default gap-4">
                <ImageComponent src={Stock} alt="Stock" className="w-10 h-10 hover:scale-105 transition-transform duration-300 rounded-full object-cover" />
                <span className="font-semibold hover:text-blue-400">John Doc</span>
                <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <div className="mb-4">
                <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
            </div>
        </div>
        </>
    )
}
export default Comment;