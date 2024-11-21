import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from "./Calculator";

describe('Calculator', () => {
  test('render container layout of a calculator with title calculator', () => {
    render(<Calculator />);
    expect(screen.getByText('Calculator'));

  });

  test('render entry screen for calculator', () => {
  });

  test('should display buttons with numbers', () => {

  });

  test('have five operands shown on the screen', () => {

  });

  test('should display the number clicked on the screen', () => {

  });

  test('should add two numbers correctly', () => {});

  test('should minus two numbers correctly', () => {});

  test('should divide two numbers correctly', () => {});

  test('should multiply two numbers correctly', () => {});

});
