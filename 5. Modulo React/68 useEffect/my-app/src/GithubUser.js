import { useEffect, useState } from "react";

// Solution with fetch(...).then(...).then(...)
export function GithubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        //console.log(response.status) prints 200 if all is good
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username]);

  return <div>{data && <h1>{data.name}</h1>}</div>;
}

/* Solution with async ... await + try {...} catch {...}
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
*/
