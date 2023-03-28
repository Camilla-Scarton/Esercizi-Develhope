import React from "react"
import { Welcome1, Welcome2, Welcome3, Welcome4 } from "./Welcome"

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome1/>
        Without a default value, if the name is not passed, there is no error and nothing is rendered instead of the props missing.
        <div>---</div>
        <Welcome1 name="Camilla"/> 
        With name passed. 
        <div>---</div>
        <Welcome2/> 
        With a default value given with the nullish coalescing operator (??)
        <div>---</div>
        <Welcome3/>
        With a default value given with "static defaultProps = &#123;...&#125;" inside the class.
        <div>---</div>
        <Welcome4/>
        With a default value given with "Welcome4.defaultProps = &#123;...&#125;" outside the class.
      </div>
    )
  }
}
