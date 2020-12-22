import { MatchReader } from './types/MatchReader';
import { Summary } from './types/Summary';

try {
  const reader = MatchReader.WithCsv('football.csv');
  const summary = Summary.WinsAnalysisConsole('Arsenal');
  summary.buildAndPrintReport(reader.games);
} catch (e) {
  console.dir(e.message);
}
