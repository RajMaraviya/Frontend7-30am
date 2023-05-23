import React from "react";
import  ReactDOM  from "react-dom/client";
import Employee from "./components/employee";
import CarApp from "./components/car";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Employee />
        <CarApp />
    </>
)