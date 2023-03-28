import React from 'react';
import ReactDOM from 'react-dom/client';
import { Colors } from "./Colors";

const items = [
  {
    id: 0,
    name: "Yellows",
  },
  {
    id: 1,
    name: "Red",
  },
  {
    id: 2,
    name: "Blue",
  }];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Colors colors={items}/>
);
