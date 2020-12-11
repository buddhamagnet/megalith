// TYPE ANNOTATIONS

let a1: string[] = ['mouth', 'on', 'a', 'stick'];

let cars: string[][] = [['corolla', 'primus'], ['dave']];

let flex: (string | number)[] = ['dave', 12];

flex.map((el) =>
  console.log(typeof el === 'string' ? el.toUpperCase() : el * 100)
);

// TYPE INFERENCE

let a2 = ['mouth', 'on', 'a', 'stick'];
a2.push('rocks');
a2.map((el) => console.log(el.length));

console.dir({ a1, a2 });

// LIFE IS GOOD
