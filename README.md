# Incorrect Null and Undefined Handling in JavaScript Function

This repository demonstrates a common error in JavaScript: incorrect handling of null and undefined values. The function `foo` attempts to add two numbers but fails to correctly handle cases where one or both arguments are null or undefined.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description
The original function only checks for null values. When an undefined value is passed, it leads to NaN as a result. The correct implementation should explicitly check for both null and undefined and handle them appropriately.

## Solution
The solution involves checking for both null and undefined values using loose comparison (==) or strict equality (===) and then returning 0 or handling the situation appropriately.