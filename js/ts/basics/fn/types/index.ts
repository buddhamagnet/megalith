type add = (n: number) => number;

type fn = Function;

const addTen: add = (n: number): number => n + 10;
const addHundred: add = (n: number): number => n + 100;

const identity: fn = (n: any): any => n;

console.log(addTen(10));
console.log(addHundred(10));
console.log(identity(100));
console.log(identity([1, 2, 3, 4, 5, 6]));
console.log(identity({ name: 'dave' }));
