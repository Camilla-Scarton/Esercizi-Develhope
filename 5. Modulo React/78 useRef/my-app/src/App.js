import { useState } from "react";
import { CarDetails } from "./CarDetails";

export function App() {
// Two possible default values
  const default1 = {
    defaultModel: "Panda",
    defaultYear: 2020,
    defaultColor: "white",
  };
  const default2 = {
    defaultModel: "Clio",
    defaultYear: 2002,
    defaultColor: "black",
  };

  // To set a dynamic prop that changes with button clicked
  const [condition, setCondition] = useState(true);
  function changeDefault() {
    setCondition((c) => !c);
  }

  return (
    <>
      <CarDetails initialData={condition ? default1 : default2} />
      <button onClick={changeDefault}>Change default!</button>
      <p>With changeable default values, I could debug the useEffect functionality!</p>
    </>
  );
}
