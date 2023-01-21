import React from "react";
import { CounterButton } from "./CounterButton";


export class ClickCounter extends React.Component {
    state = {
        counter: 0,
    }

    // In this case, the method is passed as a prop at row 23
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
                <CounterButton onClickProp={this.incrementOnClick} />
            </div>
        )
    }
}