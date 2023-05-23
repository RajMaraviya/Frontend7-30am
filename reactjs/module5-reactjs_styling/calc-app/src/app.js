import React from "react";


function App()
{
    return(
        <>
            <div classNameName="container">
                <div className="calculator">
                    <input type="text" id="inputBox" placeholder="0" />
                    <div>
                        <button className="button operator">AC</button>
                        <button className="button operator">DEL</button>
                        <button className="button operator">%</button>
                        <button className="button operator">/</button>
                    </div>
                    <div>
                        <button className="button">7</button>
                        <button className="button">8</button>
                        <button className="button">9</button>
                        <button className="button operator">*</button>
                    </div>
                    <div>
                        <button className="button">4</button>
                        <button className="button">5</button>
                        <button className="button">6</button>
                        <button className="button operator">-</button>
                    </div>
                    <div>
                        <button className="button">1</button>
                        <button className="button">2</button>
                        <button className="button">3</button>
                        <button className="button operator">+</button>
                    </div>

                    <div>
                        <button className="button">00</button>
                        <button className="button">0</button>
                        <button className="button">.</button>
                        <button className="button equalBtn">=</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;