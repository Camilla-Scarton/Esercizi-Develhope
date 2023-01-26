import { Component } from "react";

export class Counter extends Component {
  state = {
    count: this.props.initialCount,
  };

  // constructor is not required
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.increment,
      });
    }, this.props.interval);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

Counter.defaultProps = {
  initialCount: 0,
  increment: 1,
  interval: 1000,
};
