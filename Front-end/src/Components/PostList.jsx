import PostListItem from "./PostListItem";
import {
  useQuery,
} from '@tanstack/react-query'
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}posts`);
  return res.data;
}

function PostList() {
   

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetchPosts(),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

    return(
        <>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        </>
    )
    
}
export default PostList;