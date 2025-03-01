import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Calculator from "./Calculator";
import {calculate} from "./helpers/calculate";

describe('Calculator', () => {
  test('render container layout of a calculator with title calculator', () => {
    render(<Calculator />);
    expect(screen.getByText('Calculator')).toBeInTheDocument();

  });

  test('render 0 on the display', () => {
    render((<Calculator />));
    expect(screen.getByTestId('calcDisplay')).toHaveTextContent('0');
  });

  test('should display buttons with numbers and operands', () => {
    const buttons = ['C', '±', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    render(<Calculator />);
    buttons.forEach((buttonText) => {
      // Look for elements with button tag that contain the text
      const buttonElements = screen.getAllByText(buttonText, { selector: 'button' });
      expect(buttonElements.length).toBeGreaterThan(0);
    });
  });

  test('should display the number clicked on the screen', () => {
    render(<Calculator />);

    const button7 = screen.getByText('7');

    const display = screen.getByTestId('calcDisplay');

    fireEvent.click(button7);

    expect(display).toHaveTextContent('7');

  });

  test('should append the operator if 0 or a number is selected', () => {
    render(<Calculator />);
    const button7 = screen.getByText('7');
    fireEvent.click(button7);
    const multiplyButton =  screen.getByText('x');
    fireEvent.click(multiplyButton);

    const display = screen.getByTestId('calcDisplay');

    expect(display).toHaveTextContent('7 *');
  });

  test('should be able to display full calculation in display', () => {
    render(<Calculator />);
    const button7 = screen.getByText('7');
    fireEvent.click(button7);
    const multiplyButton =  screen.getByText('x');
    fireEvent.click(multiplyButton);
    const button2 = screen.getByText('2');
    fireEvent.click(button2);

    const display = screen.getByTestId('calcDisplay');

    expect(display).toHaveTextContent('7 * 2');
  });

  test('should perform a calculation when pressing = button', () => {
    render(<Calculator />);
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const multiplyButton =  screen.getByText('x');
    fireEvent.click(multiplyButton);
    const button2 = screen.getByText('2');
    fireEvent.click(button2);

    const equalButton = screen.getByTestId('equalButton');
    fireEvent.click(equalButton);

    const display = screen.getByTestId('calcDisplay');

    expect(display).toHaveTextContent('16');
  });
  test('should have a function to perform calculation', () => {
    render(<Calculator />);

    const result = calculate('5', '7', '*');

    expect(result).toEqual('35');
  });

  test('should perform a calculation automatically when entering number operator number', () => {
    render(<Calculator />);
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const multiplyButton =  screen.getByText('x');
    fireEvent.click(multiplyButton);
    const button2 = screen.getByText('2');
    fireEvent.click(button2);
    fireEvent.click(multiplyButton);

    const display = screen.getByTestId('calcDisplay');

    expect(display).toHaveTextContent('16 *');
  });

  test('should multiply two numbers correctly', () => {
    render(<Calculator />);
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const multiplyButton =  screen.getByText('x');
    fireEvent.click(multiplyButton);
    const button2 = screen.getByText('2');
    fireEvent.click(button2);

    const equalButton = screen.getByTestId('equalButton');
    fireEvent.click(equalButton);

    const display = screen.getByTestId('calcDisplay');

    expect(display).toHaveTextContent('16');
  });

  test('should minus two numbers correctly', () => {
    render(<Calculator />);
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const multiplyButton =  screen.getByText('-');
    fireEvent.click(multiplyButton);
    const button2 = screen.getByText('2');
    fireEvent.click(button2);

    const equalButton = screen.getByTestId('equalButton');
    fireEvent.click(equalButton);

    const display = screen.getByTestId('calcDisplay');

    expect(display).toHaveTextContent('6');
  });

  test('should divide two numbers correctly', () => {
    render(<Calculator />);
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const multiplyButton =  screen.getByText('÷');
    fireEvent.click(multiplyButton);
    const button2 = screen.getByText('2');
    fireEvent.click(button2);

    const equalButton = screen.getByTestId('equalButton');
    fireEvent.click(equalButton);

    const display = screen.getByTestId('calcDisplay');

    expect(display).toHaveTextContent('4');
  });

  test('should add two numbers correctly', () => {
    render(<Calculator />);
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const multiplyButton =  screen.getByText('+');
    fireEvent.click(multiplyButton);
    const button2 = screen.getByText('2');
    fireEvent.click(button2);

    const equalButton = screen.getByTestId('equalButton');
    fireEvent.click(equalButton);

    const display = screen.getByTestId('calcDisplay');

    expect(display).toHaveTextContent('10');
  });

  test('should calculate percentages', () => {
    render(<Calculator />);
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const multiplyButton =  screen.getByText('+');
    fireEvent.click(multiplyButton);
    const button1 = screen.getByText('1');
    fireEvent.click(button1);
    const button0 = screen.getByText('0');
    fireEvent.click(button0);

    const percentageButton = screen.getByTestId('percentageButton');
    fireEvent.click(percentageButton);

    const display = screen.getByTestId('calcDisplay');

    expect(display).toHaveTextContent('8 + 10%');

    const equalButton = screen.getByTestId('equalButton');
    fireEvent.click(equalButton);

    const resultDisplay = screen.getByTestId('calcDisplay');

    expect(resultDisplay).toHaveTextContent('8.8');

  });

  test('should clear display when pressing C', () => {
    render(<Calculator />);
    const clearButton = screen.getByTestId('clearButton');
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const display = screen.getByTestId('calcDisplay');
    expect(display).toHaveTextContent('8');

    fireEvent.click(clearButton);
    const clearedDisplay = screen.getByTestId('calcDisplay');
    expect(clearedDisplay).toHaveTextContent('0');
  });

  test('plus and minus must reflect on the display', () => {
    render(<Calculator />);
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const plusMinusButton = screen.getByTestId('plusMinusButton');
    fireEvent.click(plusMinusButton);
    const display = screen.getByTestId('calcDisplay');
    expect(display).toHaveTextContent('-8');
    fireEvent.click(plusMinusButton);
    const revertDisplay = screen.getByTestId('calcDisplay');
    expect(revertDisplay).toHaveTextContent('8');
  });

  test('using minus should show correct calculation', () => {
    render(<Calculator />);
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const plusMinusButton = screen.getByTestId('plusMinusButton');
    fireEvent.click(plusMinusButton);
    const display = screen.getByTestId('calcDisplay');
    expect(display).toHaveTextContent('-8');
    const multiplyButton =  screen.getByText('+');
    fireEvent.click(multiplyButton);
    const button2 = screen.getByText('2');
    fireEvent.click(button2);
    const equalButton = screen.getByTestId('equalButton');
    fireEvent.click(equalButton);
    const calcDisplay = screen.getByTestId('calcDisplay');
    expect(calcDisplay).toHaveTextContent('-6');
  });

});
