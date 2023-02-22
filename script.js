//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evalString(str) {
  try {
    // Check if expression starts with invalid operator
    if (/^[+/*]/.test(str)) {
      throw new SyntaxError("Expression should not start with invalid operator");
    }

    // Check if expression ends with invalid operator
    if (/[+/*-]$/.test(str)) {
      throw new SyntaxError("Expression should not end with invalid operator");
    }

    // Check for invalid combination of operators
    if (/([+/*-])\1/.test(str)) {
      throw new InvalidExprError();
    }

    // Check if expression contains only valid characters
    if (!/^[\d+\-*/\s]+$/.test(str)) {
      throw new OutOfRangeError(str);
    }

    // Evaluate the expression and return the result
    return eval(str);
  } catch (err) {
    // Handle errors
    if (err instanceof OutOfRangeError || err instanceof InvalidExprError) {
      console.error(`${err.name}: ${err.message}`);
    } else {
      throw err;
    }
  }
}

// Example usage
try {
  const result = evalString("1 + 2 * 3 - 4 / 2");
  console.log("Result:", result);
} catch (err) {
  console.error(err);
}
