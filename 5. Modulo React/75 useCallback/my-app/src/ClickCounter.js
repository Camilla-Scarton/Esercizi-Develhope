import { useCounter } from "./useCounter"

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
