import React from "react";
import {add, sub, mul, div} from './components/calc'
function Calc()
{
    return(
        <>
            <div className="main-section">
                <input type={Text} placeholder="Enter a" id="add-a"></input>
                <input type={Text} placeholder="Enter b" id="add-b"></input>

                    <button type="button" onClick={add}>Add</button>
                    <p id="ad"></p>


                    <button type="button" onClick={sub}>Sub</button>
                    <p id="su"></p>


                    <button type="button" onClick={mul}>Mul</button>
                    <p id="mu"></p>


                    <button type="button" onClick={div}>Div</button>
                    <p id="di"></p>

            </div>
        </>
    )
}
export default Calc;