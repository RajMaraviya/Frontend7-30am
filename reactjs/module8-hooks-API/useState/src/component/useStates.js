import React, {useState} from 'react';

export default function UseStates() {
    const [name, setName] = useState("Raj")
  return (
    <>
        <h1>my name is : {name}</h1>
        <button onClick={()=>(setName('maraviya'))}>click here</button>
    </>
  )
}
