import { App } from "./App"
import ReactDOM from "react-dom"

ReactDOM.render(
    <div>
        <div>With age greater than 18</div>
        <App name="Camilla" age={26}/>
        <div>---</div>
        <div>With age under 18</div>
        <App name="Sara" age={10}/>
    </div>, document.querySelector("#root"))
