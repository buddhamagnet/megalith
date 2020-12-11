import { Sortable } from './interfaces';

export class Sorter {
  constructor(public sortable: Sortable) {}
  sort(): void {
    const length = this.sortable.length();
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.sortable.compare(j)) {
          this.sortable.swap(j);
        }
      }
    }
  }
}

export class NumberCollection {
  constructor(private coll: number[]) {}
  sort(): void {
    const sorter = new Sorter(this);
    sorter.sort();
  }
  display(): void {
    console.dir(this.coll);
  }
  swap(j: number): void {
    const left = this.coll[j];
    this.coll[j] = this.coll[j + 1];
    this.coll[j + 1] = left;
  }
  compare(left: number): boolean {
    return this.coll[left] > this.coll[left + 1];
  }
  length = (): number => this.coll.length;
}

export class CharCollection {
  private coll;
  constructor(str: string) {
    this.coll = str.split('');
  }
  sort(): void {
    const sorter = new Sorter(this);
    sorter.sort();
  }
  display(): void {
    console.dir(this.coll.join(''));
  }
  swap(j: number): void {
    const left = this.coll[j];
    this.coll[j] = this.coll[j + 1];
    this.coll[j + 1] = left;
  }
  compare(left: number): boolean {
    return this.coll[left].toLowerCase() > this.coll[left + 1].toLowerCase();
  }
  length = (): number => this.coll.length;
}

export class LinkedList {
  head: Node | null = null;

  sort(): void {
    const sorter = new Sorter(this);
    sorter.sort();
  }

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }
  length = (): number => {
    if (!this.head) return 0;
    let len = 1;
    let node = this.head;
    while (node.next) {
      len++;
      node = node.next;
    }
    return len;
  };
  at = (index: number): Node => {
    if (!this.head) {
      throw new Error('index out of bounds');
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('index out of bounds');
  };
  compare = (j: number): boolean => {
    if (!this.head) {
      throw new Error('empty list');
    }
    return this.at(j).data > this.at(j + 1).data;
  };
  swap = (left: number): void => {
    const leftNode = this.at(left);
    const rightNode = this.at(left + 1);
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  };
  display = (): void => {
    if (!this.head) {
      console.log('empty list');
    }
    let node: Node | null = this.head;
    while (node) {
      console.dir(node.data);
      node = node.next;
    }
  };
}

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}
