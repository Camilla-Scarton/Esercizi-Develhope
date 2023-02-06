import { Component } from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends Component {
  state = {
    language: "English",
  };

  handleSelect = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <>
        <select value={this.state.language} onChange={this.handleSelect}>
          <option value="English">English</option>
          <option value="Italiano">Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
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
}
