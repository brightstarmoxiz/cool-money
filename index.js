import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter}from "react-router-dom";
import { AuthProvider } from './content/AuthProvider';
// import * as serviceWorker from './my-project/Sign'


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthProvider>
             <App />
          </AuthProvider>
      </BrowserRouter>;
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a functionQA
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// serviceWorker.register()