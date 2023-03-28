import { Component } from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount,
    };

    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.increment,
      });
    }, this.props.interval);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

Counter.defaultProps = {
  initialCount: 0,
  increment: 1,
  interval: 1000,
};
