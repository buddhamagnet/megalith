import { MatchReader } from './types/MatchReader';

import { isWin } from './types/MatchResult';

try {
  const reader: MatchReader = new MatchReader('football.csv');
  let manWins = 0;
  for (let row of reader.games) {
    if (row[1] == 'Man United' && isWin(row[5])) {
      manWins++;
    }
  }
  console.log(`Wins for Man Utd: ${manWins}`);
} catch (e) {
  console.dir(e.message);
}
