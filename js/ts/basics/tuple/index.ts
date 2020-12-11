const t1: Tuple = ['dave', true, 12];
const t2: [string, boolean] = ['mark', false];

type Tuple = [string, boolean, number];

const printTuple = (tuple: Tuple): void => console.log(tuple);

printTuple(t1);
