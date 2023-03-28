import React from "react"
import { Welcome } from "./Welcome"

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>---With values---</div>
        <Welcome name="Camilla" age={26}/>
        <div>---With default values---</div>
        <Welcome />
      </div>
    )
  }
}
