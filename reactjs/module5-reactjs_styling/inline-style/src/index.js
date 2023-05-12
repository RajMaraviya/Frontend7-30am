import React from "react";
import ReactDOM  from "react-dom/client";
import reportWebVitals from "./reportWebVitals"; //./reportWebVitals
import Innlinee from "./components/inline";

const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(
    <>
        <Innlinee />
    </>
);


reportWebVitals();
