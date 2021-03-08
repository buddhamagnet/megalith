// UNION TYPES

// HERE WE ACCEPT MORE THAN ONE TYPE - A UNION OF BOTH

// THIS IS GARBAGE, I WILL NEVER DO THIS

const add = (n1: number | string, n2: number | string): number | string => {
  if (typeof n1 === 'string' && typeof n2 === 'string') {
    return n1.toUpperCase() + n2.toUpperCase();
  }
  return +n1 + +n2;
};

console.log(add(1, 2));
console.log(add('1', '2'));
