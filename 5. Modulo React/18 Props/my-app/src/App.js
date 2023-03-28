import React from "react"
import { Welcome } from "./Welcome"

export class App extends React.Component {
  // It works fine if we pass JSX elements as props... just remember to use curly braces!
  render() {
    return <Welcome name={<strong>Camilla</strong>}/>
  }
}
