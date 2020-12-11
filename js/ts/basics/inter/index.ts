const civic = {
  type: 'vehicle',
  name: 'civic',
  year: new Date('2020-12-12'),
  broken: false,
  metadata: { notes: 'about to collapse, consider this scrap', code: 1967 },
  summary(): string {
    return this.name;
  },
  status(): boolean {
    return this.broken;
  },
  age(): Date {
    return this.year;
  },
  data(): Metadata {
    return this.metadata;
  },
  kind(): string {
    return this.type;
  },
};

const computer = {
  type: 'computer',
  name: 'macbook',
  year: new Date('2020-12-12'),
  broken: false,
  metadata: { notes: 'do not upgrade', code: 1967 },
  summary(): string {
    return this.name;
  },
  status(): boolean {
    return this.broken;
  },
  age(): Date {
    return this.year;
  },
  data(): Metadata {
    return this.metadata;
  },
  kind(): string {
    return this.type;
  },
};

interface Metadata {
  notes: string;
  code: number;
}

interface Reportable {
  kind(): string;
  summary(): string;
  status(): boolean;
  age(): Date;
  data(): Metadata;
}

const logReport = (item: Reportable): void => {
  console.log(item.kind());
  console.log(item.summary());
  console.log(item.age());
  console.log(item.status());
  console.log(item.data());
};

logReport(civic);
logReport(computer);
