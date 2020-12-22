export enum MatchResult {
  'HomeWin' = 'H',
  'AwayWin' = 'A',
  'Draw' = 'D',
}

export type MatchRow = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export const isWin = (el: string): boolean =>
  el == MatchResult.HomeWin || el === MatchResult.AwayWin;
