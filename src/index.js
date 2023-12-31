import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Currenttime from './Login/Currenttime';
import Timer from './Login/Timer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer/>
    <Currenttime/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
