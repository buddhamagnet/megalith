// CLASSES AND OBJECTS

class Collection<T> {
  constructor(private coll: T[]) {}

  get(index: number): T {
    return this.coll[index];
  }

  set(el: T) {
    this.coll = [...this.coll, el];
  }

  dump(): void {
    console.log(this.coll);
  }
}

interface Screamer {
  scream(): void;
}

class Low {
  scream(): void {
    console.log('yeasass');
  }
}

class High {
  scream(): void {
    console.log('YEAEAEEEAEEEEEEE');
  }
}

const yelp = {
  scream: () => console.log('yelp!'),
};

const collNums = new Collection<number>([1, 2, 3, 4, 5]);
console.log(collNums.get(2));
// Type inference.
const collStrings = new Collection(['mouth', 'on', 'a', 'stick']);
console.log(collStrings.get(2));
collStrings.dump();
// Type inference, be careful as you can only add High and Low instances now.
const collScreamersInferred = new Collection([new Low(), new High()]);
console.log(collScreamersInferred.get(1));
collScreamersInferred.dump();
// This will error.
// collScreamersInferred.set(new Date());
// Type annotation, now we can add anything that screams.
const collScreamersAnnotated = new Collection<Screamer>([
  new Low(),
  new High(),
]);
collScreamersAnnotated.set(new Low());
collScreamersAnnotated.set(yelp);

console.log(collScreamersAnnotated.get(3));
collScreamersAnnotated.dump();
