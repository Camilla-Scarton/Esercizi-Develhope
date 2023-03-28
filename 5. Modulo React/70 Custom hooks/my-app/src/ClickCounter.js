import { useState } from "react";

// custom hook
function useCounter(start = 0) {
  const [counter, setCounter] = useState(start);

  function plusOne() {
    setCounter((c) => c + 1);
  }

  function minusOne() {
    setCounter((c) => c - 1);
  }

  function reset() {
    setCounter(start);
  }

  return { counter, plusOne, minusOne, reset };
}

export function ClickCounter() {
  const { counter, plusOne, minusOne, reset } = useCounter(0);

  return (
    <>
      <div>Il counter è a: {counter}</div>
      <button onClick={plusOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
