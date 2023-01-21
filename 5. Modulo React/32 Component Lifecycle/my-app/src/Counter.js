import React from "react"

export class Counter extends React.Component {
    state = {
        count: this.props.initialCount,
    }

    constructor(props) {
        super(props)
        this._intervalID = 0
    }

    componentDidMount() {
        this._intervalID = setInterval(() => {
            this.setState((state) => {
                return { 
                    count: this.state.count + this.props.increment
                }
            })
        }, this.props.interval)
    }

    // To update: reset if value greater than 10*initialCount
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count >= 10*this.props.initialCount) {
            this.setState((state) => {
                return {
                    count: this.props.initialCount
                }
            })
        }
    }

    componentWillUnmount() {
        if (this._intervalID) {
            clearInterval(this._intervalID)
            console.log("interval stop")
        }  
    }

    render() {
        return <h1>{this.state.count}</h1>
    }
}

Counter.defaultProps = {
    initialCount: 1,
    increment: 1,
    interval: 1000,
}