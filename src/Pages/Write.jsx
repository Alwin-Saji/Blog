import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useMutation } from '@tanstack/react-query';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../Components/Upload.jsx";

function Write() {
  const [value, setValue] = useState('');
  const [cover, setCover] = useState("");
  const [progress, setProgress] = useState(0);
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");

  const { getToken } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post created successfully!");
      navigate(`/post/${res.data.slug}`);
    },
  });


  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div className="text-white">Loading...</div>;
  if (isLoaded && !isSignedIn) return <div className="text-white text-center">You should Login!..</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img:cover.filePath || "",
      title: formData.get('title'),
      desc: formData.get('desc'),
      category: formData.get('category'),
      content: value,
    };
    console.log(data);
    mutation.mutate(data);
  };

  useEffect(() => {
    img&&setValue((prev) => prev + `<p><img src="${img.url}" width="300" /></p>`);
  },[img]);

  useEffect(() => {
    video&&setValue((prev) => prev + `<p><iframe controls classname="ql-video" src="${video.url}"/></p>`);
  },[video]);



  return (
    <div className="text-white unica-one-regular p-5 px-5 sm:px-10 h-full w-full">
      <h1 className="text-xl sm:text-2xl font-bold">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Upload type="image/*" setData={setCover} setProgress={setProgress}>
        <button type="button" className="bg-gray-800 w-fit text-white p-2 mt-5 rounded">Add a cover image</button>
       </Upload>

        <input
          name="title"
          type="text"
          className="text-xl sm:text-2xl font-bold bg-gray-800/60 p-5 rounded-2xl"
          placeholder="Enter post title"
        />
        <div className="">
          <label htmlFor="category">Choose Category:</label>
          <select
            className="bg-black/40 text-white p-2 ml-3 rounded-xl"
            name="category"
            id="category"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="bg-gray-800/60 rounded-2xl p-4 text-white h-20 sm:h-24 font-sans"
          name="desc"
          placeholder="Enter post description"
        />
        <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex flex-row sm:flex-col gap-2 mr-0 sm:mr-2">
          <Upload type="image/*" className="w-10 h-10" setData={setImg} setProgress={setProgress}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </Upload>
          <Upload type="video/*" setData={setVideo} setProgress={setProgress}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </Upload>
          </div>
        <ReactQuill
          className="h-[50vh] sm:h-[12vw] w-full flex-1"
          theme="snow"
          value={value}
          onChange={setValue}
          />
          </div>
        <button
          disabled={mutation.isPending || 0>progress && progress<100}
          className="bg-gray-800 w-full sm:w-fit text-white py-2 px-4 m-auto mt-10 rounded-xl text-xl sm:text-2xl hover:text-gray-800 font-bold hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Sending..." : "SEND"}
        </button>
        {"Progress: " + progress}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
 )};
export default Write;