import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h3>With name passed as prop:</h3>
    <Welcome name="Camilla"/>
    <h3>Without name passed as prop:</h3>
    <Welcome />
  </>
);
