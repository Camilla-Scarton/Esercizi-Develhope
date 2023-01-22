import React from "react"
import { Welcome } from "./Welcome"

export class App extends React.Component {
  // It works fine if we pass JSX elements as props: in this case the name is rendered bold
  render() {
    return <Welcome name={<strong>Camilla</strong>}/>
  }
}
