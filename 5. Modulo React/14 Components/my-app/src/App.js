import React from "react"
import { Hello } from "./Hello"
import { Message } from "./Message"

// Hello followed by Message is equal to:
// <h1>Hello, World!</h1> followed by <p>What a beautiful day!</p> followed by <p>What a beautiful day!</p>
// All <div> present in the definition of the classes (as at rows 11 and 14) are all rendered in the html structure!
export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Message />
      </div>
    )
  }
}
