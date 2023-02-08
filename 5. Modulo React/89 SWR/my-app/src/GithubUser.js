import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGithubUser(user) {
  // fetch data conditionally: if function used as key returns a falsey value, the request is NOT started.
  const { data, error, mutate } = useSWR(
    () => (user ? `https://api.github.com/users/${user}` : null),
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error, // if both data and error are empty, we are loading!
    mutate, // we can use the mutate function to check and update the remote cache
            // defining mutate in line 6 bounds it to the useSWR key
            // calling mutate without parameters triggers a revalidation
  };
}

export function GithubUser({ username }) {
  const { data, error, isLoading, mutate } = useGithubUser(username);

  if (!data) {
    return (
      <>
        <h1>No request started!</h1>
        <button onClick={mutate}>Refresh</button>
      </>
    );
  } else {
    return (
      <>
        {data.name ? <h1>{data.name}</h1> : <h1>{data.message}</h1>}
        {error && <h3>Error!</h3>}
        {isLoading && <h3>Loading...</h3>}
        <button onClick={mutate}>Refresh</button>
      </>
    );
  }
}
