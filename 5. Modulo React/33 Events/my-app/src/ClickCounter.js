import { Component } from "react";

export class ClickCounter extends Component {
  state = {
    counter: 0,
  };

  incrementOnClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <div>Il counter è a: {this.state.counter}</div>
        <button onClick={this.incrementOnClick}>Button</button>
      </>
    );
  }
}
