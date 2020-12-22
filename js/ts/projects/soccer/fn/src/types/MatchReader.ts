import { DataReader } from './interfaces';
import { stringToDate } from '../utils';
import { MatchResult, MatchRow } from './Match';
import { CsvReader } from './CsvReader';

export class MatchReader {
  matches: MatchRow[] = [];

  static WithCsv(file: string): MatchReader {
    return new MatchReader(new CsvReader(file));
  }

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.mapRow);
  }

  mapRow(row: string[]): MatchRow {
    return [
      stringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
  get games(): MatchRow[] {
    if (this.matches.length === 0) this.load();
    return this.matches;
  }
}
