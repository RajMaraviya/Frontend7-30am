import React from "react";

function Nam(props)
{
    return(
        <>
            <p>my name is <span style={{fontWeight:'900', color:'lightgray'}}>{props.name}</span> and my last name is <span style={{fontWeight:'900', color:'lightgray'}}>{props.lname}</span></p>
            <address>Address is : {props.address}</address>
            <a href="https://www.google.in" target={"_parent"} style={{color:'black', textDecoration:'none', fontWeight:'900'}}>{props.link}</a>
        </>
    )
}
export default Nam;

