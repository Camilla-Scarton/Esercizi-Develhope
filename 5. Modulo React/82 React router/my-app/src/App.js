import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Camilla" />} />
      <Route path="/counter" element={<ClickCounter />} />
      <Route path="/users/:username" element={<ShowGithubUser />} /> 
    </Routes>
  );
}
