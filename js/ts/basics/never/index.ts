const b = (): never => {
  throw new Error();
};

const u = (): never => {
  while (true) {}
};

b();
