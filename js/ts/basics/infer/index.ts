// WHEN DOES INFERENCE BREAK DOWN?

// 1. WHEN YOU DECLARE A VARIABLE AND INITIALIZE IT LATER.

let a;
a = 100;

// 2. WHEN A FUNCTION RETURNS ANY AND WE WANT TO CLARIFY THE RETURN TYPE.

const p1 = JSON.parse(`{"name":"dave"}`);
console.dir(p1.code);

const p2: { name: string } = JSON.parse(`{"name":"dave"}`);
console.dir(p2.name);

// 3. WHEN WE WANT TO HAVE A VALUE WHOSE TYPE CANNOT BE INFERRED.

let numbers = [-1, -10, 12];
let result: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    result = numbers[i];
  }
}
console.log(result);
