function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  } catch (error) {
    console.error('Error:', error.message);
    return Infinity; // Or another appropriate default value
  }
}

let result: number = add(10, 5);
console.log(result); // Output: 15

result = subtract(10, 5);
console.log(result); // Output: 5

result = multiply(10, 5);
console.log(result); // Output: 50

result = divide(10, 0);
console.log(result); // Output: Infinity (or handles the error gracefully)