import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <>
      <div>
        <Link to="/">Welcome</Link>
        <br />
        <Link to="/counter">Counter</Link>
        <br />
        <Link to="/users">GithubUserList</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Camilla" />} />
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="*" element={<h1>Not found</h1>} />

        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it!</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        
      </Routes>
    </>
  );
}
