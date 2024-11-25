export const calculate = (firstOperand: string, secondOperand: string, operator: string) => {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    let result: number | string = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'error';
            break;
        default:
            result = 0;
    }

    console.log("rsults", result);
    return result.toString(); // Return result as a string to match calculator display
};
