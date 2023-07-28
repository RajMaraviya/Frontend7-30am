import React, { useState, useEffect } from 'react';

export default function UseEffect() {
    const [count, setCount] = useState(1);
    useEffect(() => {
        setTimeout(() => {
            setCount(() => count + 1) //call seCount function for incriments numeber using INBUILD setTimeout function.
        }, 1000)
    }) // ",[]" return empty array means return data on every render 

    return (
        <>
            <h1>Count start with :{count}</h1> {/* {count} as props */}
        </>
    )
}
