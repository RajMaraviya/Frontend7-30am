import React from "react";
import ReactDOM  from "react-dom/client";
import reportWebVitals from "./reportWebVitals"; //./reportWebVitals
import './style.css'
import ExtenalForm from './components/ExternalForm'

const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(
    <React.Fragment>
        <ExtenalForm />
    </React.Fragment>
)
reportWebVitals();
