import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export function App() {
  const [language, setLanguage] = useState("English");

  function handleSelect(event) {
    setLanguage(event.target.value);
  };

  return (
    <>
      <select value={language} onChange={handleSelect}>
        <option value="English">English</option>
        <option value="Italiano">Italiano</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
      <p>
        The language shown comes from the "value" attribute in the select tag.
        <br />
        The "value" attribute value is saved in the state and then passed to the provider.
      </p>
    </>
  );
}
