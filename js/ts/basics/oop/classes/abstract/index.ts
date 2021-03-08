abstract class Decimator {
  abstract decimate(): string;
}

class Engineer extends Decimator {
  decimate() {
    return 'code';
  }
}

class Chef extends Decimator {
  decimate() {
    return 'cook';
  }
}

console.log(new Engineer().decimate());
console.log(new Chef().decimate());
