import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoList } from "./TodoList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoList render={(items, deleteItem) => {
    return (
      items.map((todo,i) => {
        return (
          <>
            <li key={i}>{todo}</li>
            <button onClick={() => {deleteItem(i)}}>Remove item</button>
          </>
        )
      })
    )
  }}/>
);

