import { MatchResult, MatchRow, isWin } from '../../../src/types/MatchResult';
import { MatchReader } from '../../../src/types/MatchReader';
import { CsvReader } from '../../../src/types/CsvReader';

test('Data splitting', () => {
  const data: MatchRow[] = new MatchReader(new CsvReader('football.csv')).games;
  const first = data[0];
  expect(first.length).toBe(7);
  expect(first[0].getFullYear()).toBe(2018);
  expect(first[1]).toBe('Man United');
  expect(first[2]).toBe('Leicester');
  expect(first[3]).toBe(2);
  expect(first[4]).toBe(1);
  expect(first[5]).toBe(MatchResult.HomeWin);
  expect(first[6]).toBe('A Marriner');
});

test('Win detection', () => {
  expect(isWin('H')).toBe(true);
  expect(isWin('A')).toBe(true);
  expect(isWin('D')).toBe(false);
});
