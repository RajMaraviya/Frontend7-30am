import React, { useState, useEffect } from 'react';

export default function UseEffectCount() {
    const [number, setNumber] = useState(1);
    useEffect(() => {
        
    }) // ",[]" return empty array means return data on every render 

    return (
        <>

                <button onClick={() => setNumber(number - 1)}>-</button>
                {number} {/* {count} as props */}
                <button onClick={() => setNumber(number + 1)}>+</button>

        </>
    )
}
