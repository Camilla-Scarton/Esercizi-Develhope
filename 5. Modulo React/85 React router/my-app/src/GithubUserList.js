import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
      <p>
        The Github username written in the input is added to the list of links.
        <br />
        If a link in the list is clicked, the Outlet component will show the
        Github name.
      </p>
      <input
        value={newUser}
        onChange={handleInput}
        placeholder="Write a username"
      ></input>
      <button onClick={addUser}>Add user by username</button>
      <h1>List</h1>
      {list.map((user, i) => (
        <div>
          <Link key={`user_${i}`} to={user}>
            Link to Github name of {user}
          </Link>
        </div>
      ))}
      <br />
      <div>
        Outlet: <Outlet />
      </div>
    </>
  );
}
