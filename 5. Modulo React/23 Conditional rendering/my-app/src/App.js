import React from "react"
import { Welcome } from "./Welcome"

export class App extends React.Component {
  render() {
    return <Welcome name={this.props.name} age={this.props.age}/>
  }
}
