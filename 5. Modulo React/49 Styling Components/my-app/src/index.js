import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from "./Welcome";

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Welcome name="Camilla" age={26}/>
);

