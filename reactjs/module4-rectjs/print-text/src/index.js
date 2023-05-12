import React from "react";
import ReactDOM  from "react-dom/client";
import reportWebVitals from "./reportWebVitals"; //./reportWebVitals
import './style.css';

const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(
    <React.Fragment>
        <div className="demo1">
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus tempora reprehenderit ipsam ut delectus totam eligendi est sunt, vel odit! Nisi dolore totam eius excepturi facere officia rerum laborum quidem.</h1>
        </div>
    </React.Fragment>
)
reportWebVitals();
