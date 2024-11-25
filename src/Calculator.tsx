import React, {useState} from 'react';
import './App.css';
import {calculate} from "./helpers/calculate";

function Calculator() {

  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstOperand, setFirstOperand] = useState('');
  const [isOperatorPressed, setIsOperatorPressed] = useState(false);
  const [isPercentage, setIsPercentage] = useState(false);

  const handlePlusMinus = () => {
    const parts = display.trim().split(' ');

    if (parts.length === 1) {
        const currentNumber = parts[0];
        setDisplay(currentNumber.startsWith('-')
            ? currentNumber.slice(1)
            : `-${currentNumber}`);
    } else if (parts.length === 3) {
        const [firstPart, operator, secondPart] = parts;

        if (secondPart) {
            const newSecondPart = secondPart.startsWith('-')
                ? secondPart.slice(1)
                : `-${secondPart}`;
            setDisplay(`${firstPart} ${operator} ${newSecondPart}`);
        }
    }
  }

  const handleNumberClick = (number: string) => {
      if (isOperatorPressed) {
          setDisplay((prev) => `${prev}${number}`);
          setIsOperatorPressed(false);
      } else {
          setDisplay((prev) => (prev === '0' ? number : prev + number));
      }
  }

  const handleOperatorClick  = (operatorInput: string) => {
      if (firstOperand && operator && !isOperatorPressed) {
          const currentNumber = display.trim().split(' ')[2];
          const result = calculate(firstOperand, currentNumber, operator);
          setDisplay(`${result} ${operatorInput} `);
          setFirstOperand(result.toString());
      } else if (!firstOperand) {
          setFirstOperand(display);
          setDisplay(`${display} ${operatorInput} `);
      }

      setOperator(operatorInput);
      setIsOperatorPressed(true);
  }

  const handleEqualClick = () => {
      if (firstOperand && operator && display) {
          let currentNumber = display.trim().split(' ')[2];

          if (isPercentage) {
              currentNumber = currentNumber.replace('%', '');
              currentNumber = (parseFloat(firstOperand) * parseFloat(currentNumber) / 100).toString();
          }

          const result = calculate(firstOperand, currentNumber, operator);
          setDisplay(result.toString());
          setOperator('');
          setFirstOperand('');
          setIsOperatorPressed(false);
          setIsPercentage(false);
      }
  }

  const clearCalculator = ()=> {
      setDisplay('0');
      setOperator('');
      setFirstOperand('');
      setIsOperatorPressed(false);
  }

    const handlePercentageClick = () => {
        if (operator && !isPercentage) {
            const currentPart = display.trim().split(' ');
            if (currentPart.length === 3 && currentPart[2]) {
                setDisplay(`${currentPart[0]} ${currentPart[1]} ${currentPart[2]}%`);
                setIsPercentage(true);
            } else if (currentPart.length === 2) {
                setDisplay(`${currentPart[0]} ${currentPart[1]} %`);
                setIsPercentage(true);
            }
        }
    }

  return (
      <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md w-96">
          <div className="bg-blue-500 text-white p-4">
              Calculator
          </div>
          <div data-testid="calcDisplay"
               className="bg-gray-200 text-gray-900 rounded-lg p-4 text-right text-xl font-mono mb-4">
              {display}
          </div>
          <div className="grid grid-cols-4 gap-3">
              <button data-testid="clearButton" className="bg-gray-300 text-gray-800 rounded-lg py-3 text-lg font-medium" onClick={() => {clearCalculator();}}>C</button>
              <button data-testid="plusMinusButton" className="bg-gray-300 text-gray-800 rounded-lg py-3 text-lg font-medium" onClick={() => handlePlusMinus()}>±</button>
              <button data-testid="percentageButton" className="bg-gray-300 text-gray-800 rounded-lg py-3 text-lg font-medium" onClick={()=> {handlePercentageClick()}}>%</button>
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium" onClick={()=> handleOperatorClick('/')}>÷</button>

              {['7', '8', '9'].map((num) => (
                  <button
                      key={num}
                      className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium"
                      onClick={() => handleNumberClick(num)}
                  >
                      {num}
                  </button>
              ))}
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium" onClick={()=> handleOperatorClick('*')}>x</button>

              {['4', '5', '6'].map((num) => (
                  <button
                      key={num}
                      className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium"
                      onClick={() => handleNumberClick(num)}
                  >
                      {num}
                  </button>
              ))}
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium" onClick={()=> handleOperatorClick('-')}>-</button>

              {['1', '2', '3'].map((num) => (
                  <button
                      key={num}
                      className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium"
                      onClick={() => handleNumberClick(num)}
                  >
                      {num}
                  </button>
              ))}
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium"  onClick={()=> handleOperatorClick('+')}>+</button>

              <button className="col-span-2 bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium" onClick={() => handleNumberClick('0')}>0</button>
              <button className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">.</button>
              <button data-testid="equalButton" className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium" onClick={() => handleEqualClick()}>=</button>
          </div>
      </div>
  );
}

export default Calculator;
