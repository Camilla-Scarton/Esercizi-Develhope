import { useState } from "react";

export function ClickCounter() {
  const [counter, setCounter] = useState(0);

  function incrementOnClick() {
    setCounter((c) => c + 1);
  }

  return (
    <>
      <div>Il counter è a: {counter}</div>
      <button onClick={incrementOnClick}>Button</button>
    </>
  );
}
