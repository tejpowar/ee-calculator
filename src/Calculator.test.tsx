import React from 'react';
import {fireEvent, getByTestId, render, screen} from '@testing-library/react';
import Calculator from "./Calculator";

describe('Calculator', () => {
  test('render container layout of a calculator with title calculator', () => {
    render(<Calculator />);
    expect(screen.getByText('Calculator')).toBeInTheDocument();

  });

  test('render 0 on the display', () => {
    render((<Calculator />));
    expect(screen.getByTestId('calcDisplay')).toHaveTextContent('1234');
  });

  test('should display buttons with numbers and operands', () => {
    const buttons = ['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    render(<Calculator />);
    buttons.forEach((buttonText) => {
      const button = screen.getByText(buttonText);
      expect(button).toBeInTheDocument();
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

  test('should multiply two numbers correctly', () => {

  });

  test('should minus two numbers correctly', () => {
  });

  test('should divide two numbers correctly', () => {
  });

  test('should add two numbers correctly', () => {
  });

});
