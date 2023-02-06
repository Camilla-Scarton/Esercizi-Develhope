import { useEffect, useState } from "react";

export function ClickCounter({ onCounterChange }) {
  const [counter, setCounter] = useState(0);

  function incrementOnClick() {
    setCounter((c) => c + 1);
  }

  useEffect(() => {
    onCounterChange(counter);
  }, [onCounterChange, counter]); 
  // onCounterChange is in the dependency array because is a prop, so a variable...
  // ...every variable used in useEffect has to be tracked in the dependency array!

  return (
    <>
      <div>Il counter è a: {counter}</div>
      <button onClick={incrementOnClick}>Button</button>
    </>
  );
}
