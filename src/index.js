import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import App from './App';
import App2 from './App2';
import AboutView from './routes/about';
import reportWebVitals from './reportWebVitals';
import Index from './routes';
import RegisterView from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App2/>}>
      <Route path="/" element={<Index/>}/>
        <Route path="about" element={<AboutView/>}/>
        <Route path="register" element={RegisterView}/>
      </Route>
      <Route path="old" element={<App/>}/>
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
