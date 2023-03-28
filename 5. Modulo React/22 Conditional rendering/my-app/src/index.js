import { App } from "./App"
import ReactDOM from "react-dom"

ReactDOM.render(
    <div>
        <div>With age between 18 and 65</div>
        <App name="Camilla" age={26}/>
        <div>---</div>
        <div>With age between 18 and 65</div>
        <App name="Camilla" age={100}/>
    </div>, document.querySelector("#root"))
