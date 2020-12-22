import { Analyzer, OutputTarget } from './interfaces';
import { MatchRow } from './Match';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { ConsoleReporter } from './reporters/ConsoleReporter';
import { HTMLReporter } from './reporters/HTMLReporter';

export class Summary {
  static WinsAnalysisHTML(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), [new HTMLReporter()]);
  }

  static WinsAnalysisConsole(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), [new ConsoleReporter()]);
  }

  constructor(public analyzer: Analyzer, public reporters: OutputTarget[]) {}

  buildAndPrintReport(matches: MatchRow[]): void {
    const results = this.analyzer.run(matches);
    this.reporters.forEach((reporter) => reporter.print(results));
  }
}
