import React from "react"

export class Counter extends React.Component {
    constructor(props) {
		super(props)
		this.state = {
			count: 0,
		}

        setInterval(() => {
            // setState can take as input both an object (the state itself) or an arrow function
            // usign the arrow function that takes as input the state, it's sure that we're taking the current value of the state
            this.setState((state) => {
                return { 
                    count: this.state.count + 1
                }
            })
        }, 1000)
	}

    render() {
        return <h1>{this.state.count}</h1>
    }
}