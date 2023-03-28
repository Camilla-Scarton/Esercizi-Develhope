import React from 'react';
import ReactDOM from "react-dom"
import { Counter } from "./Counter"

ReactDOM.render(<Counter initialCount={2} increment={4} interval={1000} />, document.querySelector("#root"))
