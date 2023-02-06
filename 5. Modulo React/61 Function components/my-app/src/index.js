import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sum } from './Sum';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Sum numbers={[1,2,3]}/>
  </>
);
