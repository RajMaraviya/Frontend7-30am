import React,{useState} from "react";


function App()
{

    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();
    
    function inputNum (e) {
        let input = e.target.value
        if(num === 0){
            setNum(input);
        } else {
            setNum(num+input);
        }
    }

    function clear() {
        setNum(0);
    }

    function porcentagem(e) {
        setNum(num / 100);
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === "X") {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num));
        }else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
    }

    function del(e) {
        // const lastCharacter = num.slice(1)
        if (e.target.value) {
            setNum(num.substring(0, num.length - 1))
        }
         else {
            setNum(num.substring(0, num.length - 1))
        }
    }

    return(
        <>
            <div classNameName="container">
                <div className="calculator">
                    <h1 id="inputBox" placeholder="0" >{num}</h1>
                    <div>
                        <button className="button" onClick={clear}>AC</button>
                        <button className="button operator" onClick={del}>DEL</button>
                        <button className="button operator">%</button>
                        <button className="button operator" value={'/'}>/</button>
                    </div>
                    <div>
                        <button className="button" onClick={inputNum} value={7}>7</button>
                        <button className="button" onClick={inputNum} value={8}>8</button>
                        <button className="button" onClick={inputNum} value={9}>9</button>
                        <button className="button" onClick={operatorHandler} value={'X'}>*</button>
                    </div>
                    <div>
                        <button className="button" onClick={inputNum} value={4}>4</button>
                        <button className="button" onClick={inputNum} value={5}>5</button>
                        <button className="button" onClick={inputNum} value={6}>6</button>
                        <button className="button" onClick={operatorHandler} value={'-'}>-</button>
                    </div>
                    <div>
                        <button className="button" onClick={inputNum} value={1}>1</button>
                        <button className="button" onClick={inputNum} value={2}>2</button>
                        <button className="button" onClick={inputNum} value={3}>3</button>
                        <button className="button" onClick={operatorHandler} value={'+'}>+</button>
                    </div>

                    <div>
                        <button className="button" onClick={inputNum} value={'00'}>00</button>
                        <button className="button" onClick={inputNum} value={0}>0</button>
                        <button className="button" onClick={inputNum} value={'.'}>.</button>
                        <button className="button equalBtn" onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;