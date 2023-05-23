import React from "react";
import  ReactDOM  from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Nam from "./components/name"; //function based components
import NamApp from "./components/nameClass"; //Class based components

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NamApp name="raj" lname="maraviya" link="Click here" />
    </React.StrictMode>
)

const a = ReactDOM.createRoot(document.getElementById("root1"));
a.render(
    <React.StrictMode>
        <Nam name="rudra" lname="maraviya" link="Click here" address="mavdi main road, rajkot, 360004" />
    </React.StrictMode>
)


reportWebVitals();
