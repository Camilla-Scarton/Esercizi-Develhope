import { App } from "./App"
import ReactDOM from "react-dom"

ReactDOM.render(
    <div>
        <div>Conditions NOT satisfied</div>
        <App name="Camilla" age={26}/>
        <App name="John" age={100}/>
        <div>---</div>
        <div>Conditions satisfied</div>
        <App name="John" age={30}/>
    </div>, document.querySelector("#root"))
