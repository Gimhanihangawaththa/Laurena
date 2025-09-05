import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from 'react-router-dom';
// import Login from './components/login';
// import HomeImages from './components/HomeImages';
// import SingleProduct from './components/SingleProduct';
// import AddProduct from './components/AddProduct';
// import AppNewarrivals from './components/newarrivals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <App />
    {/* <AppNewarrivals/>  */}
   {/* <HomeImages/> */}
  {/* <SingleProduct/> */}
  {/* <Login/> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
