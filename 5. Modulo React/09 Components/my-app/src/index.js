import { App } from "./App"
import ReactDOM from "react-dom"

const helloWorld = <App />

// public folder -> index.html file -> <div> with id="root"
const root = document.querySelector("#root")

// Render of App result inside the root element
ReactDOM.render(helloWorld, root)


// Solution in one row
//ReactDOM.render(<App />, document.querySelector("#root"))
