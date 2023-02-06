import { Component } from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends Component {
  render() {
    return (
      <>
        <LanguageContext.Consumer>
          {(language) => {
            return <h1>{language}</h1>;
          }}
        </LanguageContext.Consumer>
      </>
    );
  }
}
