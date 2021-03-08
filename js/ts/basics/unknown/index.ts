// Unknown is stricter than any. The latter disables all type checks,
// whereas unknown should be used when we don't know the type YET. Then
// we can use type assertions when we will have the type set at some point
// after initialization.

let un: unknown;

un = 12;
un = 'dave';

let kn: string;

console.log(un);

kn = un as string;

console.log(kn);
