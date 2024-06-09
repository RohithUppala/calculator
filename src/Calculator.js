import React, { useState } from 'react';
import './Calculator.css';

//Creating function component 
function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  //handling the click button
  const handleClick = (value) => {
    setInput(input + value);
  };

  //handling the clear button
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  //handling the equals with try and catch method
  const handleEquals = () => {
    try {
      const evaluatedResult = new Function('return ' + input)();
      setResult(evaluatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  //returning the respective buttons 
  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>C</button>
        <button onClick={() => handleClick('+/-')}>+/-</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('X')}>X</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button className="zero" onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="equals" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}

//exporting the calculator for rendering in the APP.js
export default Calculator;
