import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const FetchNew = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"], //Automatically cached by key...even if we use in another component then it fetch the cached data instead of erfetching
    queryFn: fetchPosts,
    refetchInterval: 1000, //refetch every 1 sec
    refetchOnWindowFocus: true, //if user switches tabs and returns, React Query silently refetches data in the background
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // console.log(data[0].body, "sfds");

  return (
    <div>
      <h2>Posts</h2>
      {data.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchNew;
