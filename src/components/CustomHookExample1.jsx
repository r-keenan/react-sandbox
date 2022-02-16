import UseFetch from "../hooks/useFetch";

function CustomHookExample1() {
  const { data, loading, error } = UseFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>There was an error when fetching from the API.</h3>;
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}

export default CustomHookExample1;
