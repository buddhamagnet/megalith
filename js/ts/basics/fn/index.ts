// TYPE ANNOTATIONS

const logNumber = (num: number): void => console.log(num);

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// TYPE INFERENCE

// ONLY WORKS FOR RETURN VALUES - ARGUMENTS MUST BE ANNOTATED.
// ALWAYS ANNOTATE RETURN VALUES HOWEVER TO CATCH ERRORS INSIDE THE FUNCTION.

const add1 = (a, b) => a + b;
const add2 = (a: number, b: number) => a + b;
const add3 = (a: number, b: number): number => a + b;

// NEVER - DO NOT USE THIS!

const thrower = (): never => {
  throw new Error('oops');
};
