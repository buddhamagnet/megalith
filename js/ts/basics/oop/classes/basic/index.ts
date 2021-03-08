import { Decimator } from './class';

const b = (d: Decimator) => console.log(d.holler());

const d1 = new Decimator(1, 'dave');

b(d1);
