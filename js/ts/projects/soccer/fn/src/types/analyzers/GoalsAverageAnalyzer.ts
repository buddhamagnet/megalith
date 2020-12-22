import { MatchRow, isWin } from '../Match';

export class GoalsAverageAnalyzer {
  run(matches: MatchRow[]): string {
    const average = matches.reduce((accum, cur) => {
      console.log(`team: ${cur[1]} row: ${cur[3]} accumulator: ${accum}`);
      return accum + cur[3];
    }, 0);
    return average.toString();
  }
}
