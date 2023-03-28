import React from 'react';
import ReactDOM from 'react-dom/client';
import { FilteredList } from './FilteredList';

const root = ReactDOM.createRoot(document.getElementById('root'));

let input = [
  {
    name: "Lucia2",
    id: 2,
    age: 20,
  },
  {
    name: "Lucia0",
    id: 0,
    age: 1,
  },
  {
    name: "Lucia1",
    id: 1,
    age: 10,
  },
  {
    name: "Lucia3",
    id: 3,
    age: 30,
  },
]

root.render(
  <FilteredList list={input}/>
);

