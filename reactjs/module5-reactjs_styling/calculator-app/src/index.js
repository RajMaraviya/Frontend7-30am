import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import reportWebVitals from "./reportWebVitals";
import Calc from './app'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Calc />
    </React.StrictMode>
)
reportWebVitals();