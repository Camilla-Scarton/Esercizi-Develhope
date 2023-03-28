import React from "react"
import { CounterDisplay } from "./CounterDisplay"

export class Counter extends React.Component {
    constructor(props) {
		super(props)
		this.state = {
			count: this.props.initialCount,
		}

        setInterval(() => {
            this.setState((state) => {
                return { 
                    count: this.state.count >= this.props.initialCount*10 ? this.props.initialCount : this.state.count + this.props.increment
                }
            })
        }, this.props.interval)
	}

    render() {
        return <CounterDisplay count={this.state.count} />
    }
}

Counter.defaultProps = {
    initialCount: 2,
    increment: 1,
    interval: 1000,
}