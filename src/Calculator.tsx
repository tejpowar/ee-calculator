import React from 'react';
import './App.css';

function Calculator() {
  return (
      <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md w-96">
          <div className="bg-blue-500 text-white p-4">
                Calculator
          </div>
          <div data-testid="calcDisplay" className="bg-gray-200 text-gray-900 rounded-lg p-4 text-right text-xl font-mono mb-4">
              0
          </div>
      </div>
  );
}

export default Calculator;
