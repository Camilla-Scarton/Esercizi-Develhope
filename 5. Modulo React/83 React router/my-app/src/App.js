import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Camilla" />} />
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
      <div>
        <Link to="/">Welcome</Link>
        <br />
        <Link to="/counter">Counter</Link>
        <br />
        <Link to="/users/camilla-scarton">My Github name</Link>
      </div>
    </>
  );
}
