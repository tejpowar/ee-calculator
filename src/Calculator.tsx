import React, {useState} from 'react';
import './App.css';
import {calculate} from "./helpers/calculate";

function Calculator() {

  const [calculatorEntry, setCalculatorEntry] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstOperand, setFirstOperand] = useState('');
  const [isOperatorPressed, setIsOperatorPressed] = useState(false);
  const [isPercentage, setIsPercentage] = useState(false);

  const handlePlusMinus = () => {
    const entry = calculatorEntry.trim().split(' ');

    if (entry.length === 1) {
        const currentNumber = entry[0];
        setCalculatorEntry(currentNumber.startsWith('-')
            ? currentNumber.slice(1)
            : `-${currentNumber}`);
    } else if (entry.length === 3) {
        const [firstNumber, operator, secondNumber] = entry;

        if (secondNumber) {
            const newSecondNumber = secondNumber.startsWith('-')
                ? secondNumber.slice(1)
                : `-${secondNumber}`;
            setCalculatorEntry(`${firstNumber} ${operator} ${newSecondNumber}`);
        }
    }
  }

  const handleNumberClick = (number: string) => {
      if (isOperatorPressed) {
          setCalculatorEntry((prev) => `${prev}${number}`);
          setIsOperatorPressed(false);
      } else {
          setCalculatorEntry((prev) => (prev === '0' ? number : prev + number));
      }
  }

  const handleOperatorClick  = (operatorInput: string) => {
      if (firstOperand && operator && !isOperatorPressed) {
          const currentNumber = calculatorEntry.trim().split(' ')[2];
          const result = calculate(firstOperand, currentNumber, operator);
          setCalculatorEntry(`${result} ${operatorInput} `);
          setFirstOperand(result.toString());
      } else if (!firstOperand) {
          setFirstOperand(calculatorEntry);
          setCalculatorEntry(`${calculatorEntry} ${operatorInput} `);
      }

      setOperator(operatorInput);
      setIsOperatorPressed(true);
  }

  const handleEqualClick = () => {
      if (firstOperand && operator && calculatorEntry) {
          let currentNumber = calculatorEntry.trim().split(' ')[2];

          if (isPercentage) {
              currentNumber = currentNumber.replace('%', '');
              currentNumber = (parseFloat(firstOperand) * parseFloat(currentNumber) / 100).toString();
          }

          const result = calculate(firstOperand, currentNumber, operator);
          setCalculatorEntry(result.toString());
          setOperator('');
          setFirstOperand('');
          setIsOperatorPressed(false);
          setIsPercentage(false);
      }
  }

  const clearCalculator = ()=> {
      setCalculatorEntry('0');
      setOperator('');
      setFirstOperand('');
      setIsOperatorPressed(false);
  }

    const handlePercentageClick = () => {
        if (operator && !isPercentage) {
            const currentPart = calculatorEntry.trim().split(' ');
            if (currentPart.length === 3 && currentPart[2]) {
                setCalculatorEntry(`${currentPart[0]} ${currentPart[1]} ${currentPart[2]}%`);
                setIsPercentage(true);
            } else if (currentPart.length === 2) {
                setCalculatorEntry(`${currentPart[0]} ${currentPart[1]} %`);
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
              {calculatorEntry}
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
