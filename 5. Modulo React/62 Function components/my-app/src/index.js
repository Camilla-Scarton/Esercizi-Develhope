import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sum, SumWithCheck } from './Sum';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h3>With array passed as prop:</h3>
    <Sum numbers={[1,2,3]}/>
    <h3>Without array passed as prop, but with default value:</h3>
    <Sum />
    <h3>Without array passed as prop or default value, but with check:</h3>
    <SumWithCheck />
  </>
);
