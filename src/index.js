import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from "./Main";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';



ReactDOM.render((
  <BrowserRouter>
    <Main/>
    </BrowserRouter>
    ),
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
