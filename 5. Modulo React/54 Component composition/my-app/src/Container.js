import { Component } from "react"

export class Container extends Component {
    render() {
        return (
            <div style={ {backgroundColor: "floralwhite", border: "1px solid red"} }>
                {this.props.children}
            </div>
        )
    }
}