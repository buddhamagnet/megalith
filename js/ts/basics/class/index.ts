class Vehicle {
  private colour: string;
  constructor(colour: string) {
    this.colour = colour;
  }
  drive(): void {
    throw new Error('implement drive');
  }
  honk(): void {
    throw new Error('implememt honk');
  }
  getColour(): string {
    return this.colour;
  }
}

class Car extends Vehicle {
  constructor(colour: string) {
    super(colour);
  }
  drive(): void {
    console.log('vroom vroom!');
  }
  honk(): void {
    console.log('beep beep!');
  }
  diagnose(): void {
    this.inspect();
  }
  private inspect(): void {
    console.log('sorry this is a black box');
  }
}

const v = new Car('black');

v.drive();
v.honk();
v.diagnose();
console.log(v.getColour());
