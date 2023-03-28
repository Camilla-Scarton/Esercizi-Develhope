import { useState, useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  // To controll counter incrementing on mounting and interval clearing on unmounting
  useEffect(() => {
    // The callback function is triggered on mounting (for definition of useEffect and for empty dependency array too)
    const intervalID = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    // This function is triggered only on unmounting (because it's returned and for empty dependency array not monitoring anything)
    return () => {
      clearInterval(intervalID);
      console.log("Interval cleared!");
    };
  }, []); // Better [] than [count] !

  // With [count], the returned function is called before every callback function is called again for the count change (and on unmounting too).
  // With [], we are monitoring just the mounting phase, saving the returned function call only for the unmounting.

  return <h1>{count}</h1>;
}



/* Solution NOT working because intervalID is not defined!
export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return <h1>{count}</h1>;
}
*/
