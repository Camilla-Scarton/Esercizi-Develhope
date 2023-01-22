import { App } from "./App"
import ReactDOM from "react-dom"

// Tree: App -> Welcome -> Age
// App is Welcome's parent. Welcome is App's child and Age's parent. Age is Welcome's child.
// App gets the props values. 
// The props values are passed from parent to child component with "this.props.name" or "this.props.age" as many times as necessary.
ReactDOM.render(<App name="Camilla" age={26}/>, document.querySelector("#root"))
