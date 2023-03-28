import { useState, useCallback } from "react";

export function useCounter(start = 0) {
  const [counter, setCounter] = useState(start);

  const plusOne = useCallback(function handleIncrement() {
    setCounter((c) => c + 1);
  }, []);

  const minusOne = useCallback(function handleDecrement() {
    setCounter((c) => c - 1);
  }, []);

  const reset = useCallback(function handleReset() {
    setCounter(start);
  }, [start] );

  return { counter, plusOne, minusOne, reset };
}