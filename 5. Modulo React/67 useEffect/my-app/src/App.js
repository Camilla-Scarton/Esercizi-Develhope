import { useState } from "react";
import { Counter } from "./Counter";

// To force Counter unmounting on button click
export function App() {
  const [active, setActive] = useState(true);
  function toggleActivation() {
    setActive((value) => !value);
  }
  return (
    <>
      {active && <Counter />}
      <button onClick={toggleActivation}>Toogle Counter</button>
    </>
  );
}
