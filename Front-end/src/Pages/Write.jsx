import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
function Write() {
  const [value, setValue] = useState('');

  const {isLoaded,isSignedIn} = useUser();

  if(!isLoaded) return <div className="text-white">Loading...</div>
  if(!isLoaded && !isSignedIn) return <div className="text-white">You should Login!</div>


  return (
    <>
    <div className="text-white unica-one-regular p-5 px-10 h-full w-full">
      <h1 className="text-2xl font-bold">Create a New Post</h1>
      <form className="flex flex-col gap-5">
        <button className="bg-gray-800 w-fit text-white p-2 mt-5 rounded">Add a cover image</button>
        <input type="text" className="text-2xl font-bold bg-gray-800/60 p-5 rounded-2xl" placeholder="Enter post title" />
        <div className="">
          <label htmlFor="">Choose Category:</label>
          <select className="bg-black/40 text-white p-2 ml-3 rounded-xl" name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea className="bg-gray-800/60 rounded-2xl p-4 text-white h-24 font-sans" name="desc" placeholder="Enter post description" />
        <ReactQuill className="h-[12vw]" theme="snow" value={value} onChange={setValue} />
        <button className="bg-gray-800 w-fit text-white py-2 px-4 m-auto mt-10 rounded-xl text-2xl hover:text-gray-800 font-bold hover:bg-white">SEND</button>
      </form>
    </div>
    </>
  );
}
export default Write;