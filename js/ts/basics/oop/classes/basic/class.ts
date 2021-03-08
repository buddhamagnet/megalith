export class Decimator {
  constructor(public readonly id: number, private name: string) {
    console.dir(this);
  }
  holler() {
    return this.name;
  }
}
