import React from "react";
import ReactDOM  from "react-dom/client";
import reportWebVitals from "./reportWebVitals"; //./reportWebVitals

const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(
    <React.Fragment>
        <div className="demo1">
            <h1>Google map</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.2109832631854!2d70.7722676089877!3d22.290219606637233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1683701487342!5m2!1sen!2sin" style={{border:"0",width:"100%", height:"450px"}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </React.Fragment> //react Fragments
)
reportWebVitals();
