import { Component } from "react";

export class ClickTracker extends Component {
  state = {
    lastClicked: "No one",
  };

  lastClicked = (event) => {
    this.setState({
      lastClicked: event.target.name,
    });
  };

  render() {
    return (
      <>
        <button name="Button 1" onClick={this.lastClicked}>
          Button 1
        </button>
        <button name="Button 2" onClick={this.lastClicked}>
          Button 2
        </button>
        <button name="Button 3" onClick={this.lastClicked}>
          Button 3
        </button>
        <h1>The last button clicked is: {this.state.lastClicked}</h1>
      </>
    );
  }
}
