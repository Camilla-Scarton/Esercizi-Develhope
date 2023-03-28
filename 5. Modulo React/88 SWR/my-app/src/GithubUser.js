import useSWR from "swr";

const fetcher = url => fetch(url).then(response => response.json());

function useGithubUser(user) {
  // fetch data conditionally: if function used as key returns a falsey value, the request is NOT started. 
  const { data, error } = useSWR(() => (user ? `https://api.github.com/users/${user}` : null), fetcher);

  return {
    data,
    error,
    isLoading: !data && !error // if both data and error are empty, we are loading!
  }

}

export function GithubUser({ username }) {
  const { data, error, isLoading } = useGithubUser(username);

  if (!data) return <h1>No request started!</h1>

  return (
    <>
    {data.name ? <h1>{data.name}</h1> : <h1>{data.message}</h1>}
    {error && <h3>Error!</h3>}
    {isLoading && <h3>Loading...</h3>}
    </>
  );
}

