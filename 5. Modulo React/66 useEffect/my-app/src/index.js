import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClickCounter } from "./ClickCounter"

const root = ReactDOM.createRoot(document.getElementById('root'));

const onCounterChange = (counter) => {
  console.log("The counter is now: ", counter);
}

root.render(
  <ClickCounter onCounterChange={onCounterChange}/>
);
