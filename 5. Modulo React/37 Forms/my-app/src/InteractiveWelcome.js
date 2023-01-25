import { Component } from "react";
import { Welcome } from "./Welcome";

export class IntercativeWelcome extends Component {
  state = {
    name: "",
  };

  handleInput = (event) => {
    let name = event.target.value;
    this.setState({
      name,
    });
  };

  render() {
    return (
      <>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleInput}
        ></input>
        <Welcome name={this.state.name} age={26} />
      </>
    );
  }
}
