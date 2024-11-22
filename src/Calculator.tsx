import React, {useState} from 'react';
import './App.css';

function Calculator() {

  const [display, setDisplay] = useState('0');

  const handleNumberClick = (buttonValue: string) => {
      setDisplay(buttonValue);
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
              <button className="bg-gray-300 text-gray-800 rounded-lg py-3 text-lg font-medium">C</button>
              <button className="bg-gray-300 text-gray-800 rounded-lg py-3 text-lg font-medium">±</button>
              <button className="bg-gray-300 text-gray-800 rounded-lg py-3 text-lg font-medium">%</button>
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium">÷</button>

              {['7', '8', '9'].map((num) => (
                  <button
                      key={num}
                      className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium"
                      onClick={() => handleNumberClick(num)}
                  >
                      {num}
                  </button>
              ))}
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium">
                  ×
              </button>

              <button className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">4</button>
              <button className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">5</button>
              <button className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">6</button>
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium">-</button>

              <button className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">1</button>
              <button className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">2</button>
              <button className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">3</button>
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium">+</button>

              <button className="col-span-2 bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">0</button>
              <button className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">.</button>
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium">=</button>
          </div>
      </div>
  );
}

export default Calculator;
