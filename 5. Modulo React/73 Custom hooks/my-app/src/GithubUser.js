import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { fetchGithubUser, data, loading, error } = useGithubUser(username);

  // With button clicked the request start
  function handleSearchGithubData() {
    fetchGithubUser(username);
  }

  return (
    <>
      <button onClick={handleSearchGithubData}>Search data</button>
      {loading && <h2>Loading!</h2>}
      {error && <h2>Error!</h2>}
      {data && <h1>{data.name}</h1>}
    </>
  );
}
