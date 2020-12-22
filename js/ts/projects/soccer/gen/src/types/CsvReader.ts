import fs from 'fs';

export abstract class CsvReader<T> {
  data: T[] = [];

  constructor(public file: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    try {
      this.data = fs
        .readFileSync(this.file, { encoding: 'utf-8' })
        .split('\n')
        .map((row): string[] => row.split(','))
        .map(this.mapRow);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
