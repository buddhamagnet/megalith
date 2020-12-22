class Car {
  dump(): void {
    console.log('vroom');
  }
}

class House {
  dump(): void {
    console.log('warmth');
  }
}

interface Dumpable {
  dump(): void;
}

class Thing<T extends Dumpable> {
  constructor(public data: T[]) {}
  dump(): void {
    this.data.forEach((el) => el.dump());
  }
}

const thingHouse = new Thing<House>([new House()]);
const thingCar = new Thing<Car>([new Car()]);

thingHouse.dump();
thingCar.dump();
