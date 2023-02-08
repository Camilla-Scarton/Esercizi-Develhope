import React from 'react';
import ReactDOM from 'react-dom/client';
import { GithubUser } from './GithubUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h3>First request</h3>
    <p>I pass my Gitbhub username and my name is rendered.</p>
    <GithubUser username={"Camilla-Scarton"}/>
    <hr />
    <h3>Second request</h3>
    <p>I pass an invalid Github username and an error messagge is rendered.</p>
    <GithubUser username={"Camilla-Scartonnn"}/>
    <hr />
    <h3>Third request</h3>
    <p>I don't pass any username as prop. The request isn't made!</p>
    <GithubUser />
  </>
  
);

