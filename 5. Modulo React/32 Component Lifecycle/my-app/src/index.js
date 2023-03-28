import React from 'react';
import ReactDOM from "react-dom"
import { Counter } from "./Counter"

ReactDOM.render(
    <div>
        Default counter: with no props passed but default props defined
        <Counter />
        <div>---</div>
        Custom counter: with props passed
        <Counter initialCount={1} increment={4} interval={4000} />
    </div>, document.querySelector("#root"))
