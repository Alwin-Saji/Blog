import PostListItem from "./PostListItem";
import {
  useQuery,useInfiniteQuery
} from '@tanstack/react-query'
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router";

const fetchPosts = async (pageParam,searchParams) => {
    const searchParamsObj = Object.fromEntries([...searchParams]);
    // Map 'sort' to 'sortQuery' for backend compatibility
    if (searchParamsObj.sort) {
      searchParamsObj.sortQuery = searchParamsObj.sort;
      delete searchParamsObj.sort;
    }
    console.log("searchParamsObj", searchParamsObj);
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
      params: { page: pageParam, limit: 5, ...searchParamsObj }
    });
    return res.data;
}


function PostList() {  

  const [searchParams,setSearchParams]=useSearchParams();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts',searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasmore? pages.length + 1 : undefined,
  })

  console.log(data);

  const allPosts = data ? data.pages.flatMap(page => page.posts) : [];

  if (status === 'pending') return 'Loading...'

  if (status === 'error') return 'An error has occurred: ' + error.message

    return(
        <InfiniteScroll
  dataLength={allPosts.length}
  next={fetchNextPage}
  hasMore={hasNextPage}
  loader={<h4>Loading more posts...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>All posts has been covered !</b>
    </p>
  }
>
  {allPosts.map((post) => (
      <PostListItem key={post._id} post={post} />
    ))}
</InfiniteScroll>
        
  );
    
}
export default PostList;