import { App } from "./App"
import ReactDOM from "react-dom"

ReactDOM.render(
    <div>
        <div>With age</div>
        <App name="Camilla" age={26}/>
        <div>---</div>
        <div>Without age</div>
        <App name="Camilla" />
    </div>, document.querySelector("#root"))
