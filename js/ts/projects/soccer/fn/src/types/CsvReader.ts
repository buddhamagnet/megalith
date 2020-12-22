import fs from 'fs';

export class CsvReader {
  data: string[][] = [];

  constructor(public file: string) {}

  read(): void {
    try {
      this.data = fs
        .readFileSync(this.file, { encoding: 'utf-8' })
        .split('\n')
        .map((row): string[] => row.split(','));
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
