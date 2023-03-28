import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [list, setList] = useState([]);
  const [newUser, setNewUser] = useState("");

  // to save input
  function handleInput(event) {
    setNewUser(event.target.value);
  }

  // to add saved input to list and reset input
  function addUser() {
    setList((list) => [...list, newUser]);
    setNewUser("");
  }

  return (
    <>
      <input
        value={newUser}
        onChange={handleInput}
        placeholder="Write a username"
      ></input>
      <button onClick={addUser}>Add user by username</button>
      <h1>List</h1>
      {list.map((user, i) => <GithubUser key={`user_${i}`} username={user} />)}
    </>
  );
}
