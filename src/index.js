import React from "react";
import ReactDOM from "react-dom";
import TopNav from './components/Topnav'
import Footer from './components/Footer'
import reportWebVitals from "./reportWebVitals";
import './css/index.css'

ReactDOM.render(
  <React.StrictMode>
    <TopNav/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
