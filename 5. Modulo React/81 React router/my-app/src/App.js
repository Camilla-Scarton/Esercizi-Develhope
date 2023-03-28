import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Camilla" />} />
      <Route path="/counter" element={<ClickCounter />} />
    </Routes>
  );
}
