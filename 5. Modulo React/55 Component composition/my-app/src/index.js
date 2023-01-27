import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container title="This is the title passed as prop">
    <div>First child passed as prop</div>
    <div>Second child passed as prop</div>
  </Container>
);
