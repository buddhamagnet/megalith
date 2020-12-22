import { stringToDate } from '../../../src/utils';

test('Date splitting', () => {
  const date = '12/12/2020';
  const parsed = stringToDate(date);
  expect(parsed.getFullYear()).toBe(2020);
  expect(parsed.getMonth()).toBe(11);
  expect(parsed.getDay()).toBe(6);
});

test('Date splitting bad input ', () => {
  const date = '12-12-2020';
  const parsed = stringToDate(date);
  expect(parsed.getFullYear()).toBe(NaN);
});
