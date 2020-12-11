// TYPE ANNOTATIONS

let o1: { x: number; y: number } = { x: 12, y: 12 };

const profile = {
  name: 'dave',
  age: 53,
  coords: {
    lat: 12,
    long: 34,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

profile.setAge(100);

// OBJECT DESTRUCTURING - REMEMBER TO LEAN ON INFERENCE UNLESS
// THE TYPE CANNOT BE INFERRED.

const { age }: { age: number } = profile;
console.log(age);
const { coords }: { coords: { lat: number; long: number } } = profile;
console.log(coords);

// TYPE INFERENCE

let o2 = { x: 12, y: 12 };

console.dir({ o1, o2 });
