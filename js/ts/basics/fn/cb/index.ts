const addAndHandle = (n1: number, n2: number, cb: (result: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

const logger = (result: number): void => console.log(result);
const shouter = (result: number): void => console.log(result.toString() + '!');

addAndHandle(1, 1, logger);
addAndHandle(1, 1, shouter);
// The callback signature in addAndHandle specifies that we don't do
// anything with the callback returned data, rather than constraining
// the return type of the callback itself.
addAndHandle(1, 1, (result) => result * 100);
