import { CsvReader } from './CsvReader';
import { MatchRow, MatchResult } from './MatchResult';
import { stringToDate } from '../utils';

export class MatchReader extends CsvReader<MatchRow> {
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
    if (this.data.length === 0) this.read();
    return this.data;
  }
}
