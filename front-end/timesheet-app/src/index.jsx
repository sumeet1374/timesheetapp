import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MyTimesheet from './features/mytimesheet/MyTimesheet';
import Teams from './features/teams/Teams';
import Accounts from './features/setup/accounts/Accounts';
import Navigation from './menu/navigation';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation>

    
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="mytimesheet" element={<MyTimesheet />} />
        <Route path="teams" element={<Teams/>}/>
        <Route path="setup/accounts" element={<Accounts/>} />
      </Routes>
      </Navigation>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
