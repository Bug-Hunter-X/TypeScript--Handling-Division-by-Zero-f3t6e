# TypeScript: Handling Division by Zero

This repository demonstrates a common error in TypeScript: how to handle division by zero. The initial code throws an error when attempting to divide by zero, which is correct behavior. However, the solution shows how to improve error handling to prevent the application from crashing and provides a more user-friendly experience.

## Bug

The `bug.ts` file contains a function `divide` that throws an error when division by zero occurs. While this is correct from a mathematical standpoint, it does not gracefully handle the situation. The program simply crashes when encountering a division-by-zero error.

## Solution

The `bugSolution.ts` file provides an improved version of the `divide` function. This version includes a `try...catch` block that handles the `Error` thrown when dividing by zero. If an error occurs, the function returns a default value (in this case, `Infinity`) instead of abruptly stopping the program execution. This approach ensures that the application continues running even when unexpected inputs are encountered.