import { test, expect } from 'vitest';
import validate from '../validate.js';

test('check: Empty Input', () => {
  // @ts-ignore
  expect(() => validate.check()).toThrow();
});

test('check: Invalid URL', () => {
  expect(() => validate.check('random-test-string')).toThrow();
});
