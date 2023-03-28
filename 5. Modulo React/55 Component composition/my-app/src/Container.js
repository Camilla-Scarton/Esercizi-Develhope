import { Component } from "react"

export class Container extends Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <div style={ {backgroundColor: "floralwhite", border: "1px solid red"} }>
                    {this.props.children}
                </div>
            </>
        )
    }
}