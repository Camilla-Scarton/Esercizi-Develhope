import React from "react"
import { Hello } from "./Hello"

// With multiple Hello instances, we have to group them in a <div> in the return
// All instances are rendered
export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello />
        <Hello />
        <Hello />
      </div>
    )
  }
}
