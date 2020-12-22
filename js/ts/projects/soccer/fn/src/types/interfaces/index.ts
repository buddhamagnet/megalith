import { MatchRow } from '../Match';

export interface DataReader {
  read(): void;
  data: string[][];
}

export interface Analyzer {
  run(matches: MatchRow[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}
