import { useState } from "react";

// This custom hook sets the state variables and defines the request function
export function useGithubUser() {

  const [data, setData] = useState(null); // data variable to store response info (it's null if there is no info)
  const [loading, setLoading] = useState(false); // loading variable: true if we are waiting for a response, false otherwise
  const [error, setError] = useState(null); // error variable to store error in catch (it's null otherwise)

  // The request function is defined and returned in the object (it's not called: so we can call it manually)
  async function fetchGithubUser(user) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const json = await response.json();
      if (response.status !== 200) {
        setError(new Error()); // if user passed doesn't exist, error becomes truthy and "Error!" will be rendered
      } else {
        setData(json);
      }
    } catch (err) {
      setError(error);
      setData(null);
    } finally {
        setLoading(false);
    }

  }

  return { fetchGithubUser, data, loading, error };
}