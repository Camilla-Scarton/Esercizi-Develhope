import { Component } from "react"

export class Colors extends Component {
    render() {
        return (
            <>
                <h3>Colors</h3>
                <div>
                    <h4>List</h4>
                    <ul>            
                        {this.props.colors.map(color => <li key={color.id}>{color.name}</li>)}
                    </ul>
                </div>
                <div>
                    <h4>Color - key</h4>
                    {this.props.colors.map((color, i) => <div key={`Phrase-${i}`}>Color {color.name} has key equal to {color.id}.</div>)}
                </div>
            </>
        )
    }
}