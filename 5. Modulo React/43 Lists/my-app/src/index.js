import React from 'react';
import ReactDOM from 'react-dom/client';
import { Colors } from "./Colors";

const items = ["Yellows", "Red", "Blue"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Colors colors={items}/>
);
