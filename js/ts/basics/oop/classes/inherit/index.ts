class Decimator {
  static type() {
    return 'DECIMATION';
  }
  constructor(private readonly id: number, public name: string) {}

  get ID() {
    return this.id;
  }

  set newName(name: string) {
    if (name === '') throw new Error('no name supplied');
    this.name = name;
  }
}

class Engineer extends Decimator {
  public language: string;

  static newDave(id: number, suffix: string, language: string) {
    return new Engineer(id, `dave ${suffix}`, language);
  }

  constructor(id: number, name: string, language: string) {
    super(id, name);
    this.language = language;
  }

  details() {
    return `Engineer number ${this.ID}: ${this.name} codes in ${this.language} `;
  }
}

const e1 = new Engineer(1, 'davegoodchild', 'typescript');

console.dir(e1.details());

e1.newName = 'kp';

console.dir(e1.details());

console.log(Decimator.type());

console.log(Engineer.newDave(1, 'homer', 'php').details());
