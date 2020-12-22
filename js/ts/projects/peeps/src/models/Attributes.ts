export class Attributes<T> {
  constructor(public data: T) {}
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  getAll = (): T => this.data;

  set(props: T): void {
    this.data = { ...this.data, ...props };
    console.dir(this.data);
  }
}
