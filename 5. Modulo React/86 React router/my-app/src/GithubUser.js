import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);

  async function fetchGithubUser(user) {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);

  return <div>{data && <h1>{data.name}</h1>}</div>;
}
