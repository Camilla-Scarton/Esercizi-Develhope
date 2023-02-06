import { Component } from "react";

export class App extends Component {
    state = {
        language: "eng",
    }

    handleSelect = (event) => {
        this.setState({
            language: event.target.value,
        })
    }

    render() {
        return (
            <select value={this.state.language} onChange={this.handleSelect}>
                <option value="eng">English</option>
                <option value="ita">Italiano</option>
            </select>
        )
    }
}