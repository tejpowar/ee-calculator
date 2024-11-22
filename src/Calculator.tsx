import React from 'react';
import './App.css';

function Calculator() {
  return (
      <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md w-96">
          <div className="bg-blue-500 text-white p-4">
              Calculator
          </div>
          <div data-testid="calcDisplay"
               className="bg-gray-200 text-gray-900 rounded-lg p-4 text-right text-xl font-mono mb-4">
              1234
          </div>
          <div className="grid grid-cols-4 gap-3">
              <button className="bg-gray-300 text-gray-800 rounded-lg py-3 text-lg font-medium">C</button>
              <button className="bg-gray-300 text-gray-800 rounded-lg py-3 text-lg font-medium">±</button>
              <button className="bg-gray-300 text-gray-800 rounded-lg py-3 text-lg font-medium">%</button>
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium">÷</button>

              <button data-testid className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">7</button>
              <button className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">8</button>
              <button className="bg-gray-200 text-gray-800 rounded-lg py-3 text-lg font-medium">9</button>
              <button className="bg-orange-500 text-white rounded-lg py-3 text-lg font-medium">×</button>

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
