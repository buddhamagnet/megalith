import { helloWorld } from '../../../src/index';

test('Hello world works', () => {
  expect(helloWorld('Foo')).toBe('Hello world, Foo');
});
