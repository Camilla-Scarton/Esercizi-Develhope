import { App } from "./App"
import ReactDOM from "react-dom"

ReactDOM.render(
    <div>
        Con name="Camilla" e age=26
        <App name="Camilla" age={26}/>
        ---
        Con name="Sara" age=10
        <App name="Sara" age={10}/>
    </div>, 
    document.querySelector("#root"))
