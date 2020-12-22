import { MatchRow, isWin } from '../Match';

export class WinsAnalyzer {
  constructor(private team: string = 'Man United') {}

  run(matches: MatchRow[]): string {
    let wins = 0;
    for (let row of matches) {
      if (row[1] == this.team && isWin(row[5])) {
        wins++;
      }
    }
    return `Wins for ${this.team}: ${wins}`;
  }
}
