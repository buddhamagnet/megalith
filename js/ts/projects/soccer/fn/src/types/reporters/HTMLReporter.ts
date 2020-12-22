import fs from 'fs';

export class HTMLReporter {
  print(report: string): void {
    const markup = `<html><head>report</head></body><h1>analysis</h1><div>${report}</div></html>`;
    fs.writeFileSync(`/tmp/report.html-${Date.now()}`, markup);
  }
}
