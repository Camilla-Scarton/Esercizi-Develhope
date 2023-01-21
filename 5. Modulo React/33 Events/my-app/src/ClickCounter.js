import React from "react";

export class ClickCounter extends React.Component {
    state = {
        counter: 0,
    }

    incrementOnClick = () => {
        this.setState(state => {
            return {
                counter: this.state.counter + 1,
            }
        })
    }
    
    render() {
        return (
            <div>
                <div>Il counter è a: {this.state.counter}</div>
                <button onClick={this.incrementOnClick}>Button</button>
            </div>
        )
    }
}