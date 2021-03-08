type Tuple = [string, number];

const t1: Tuple = ['dave', 53];

// Be careful, you can't assign incorrect values to a tuple
// type but you CAN push.
t1.push('what!');

console.dir(t1);
