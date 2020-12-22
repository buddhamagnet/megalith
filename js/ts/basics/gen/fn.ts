// FUNCTIONS

function printAnything<T>(arr: T[]): void {
  arr.forEach((el) => console.log(el));
}

// Call the function with the collection, note type inference.
printAnything([1, 2, 3, 4, 5]);
printAnything(['mouth', 'on', 'a', 'stick']);
