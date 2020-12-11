import { CharCollection, LinkedList, NumberCollection } from './types';

const coll1 = new NumberCollection([10, 12, 2, 1988, -12]);
coll1.sort();
coll1.display();

const coll2 = new CharCollection('deDDciXmate');
coll2.sort();
coll2.display();

const ll = new LinkedList();
ll.add(1000);
ll.add(314);
ll.add(10);
ll.add(100);
ll.add(-10);

ll.sort();
ll.display();
