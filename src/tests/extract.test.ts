import { test, expect } from 'vitest';
import Extract from '../extract.js';

const extract = new Extract();

test('getProvider: Unsupported URL', () => {
  expect(() => extract.getProvider('https://gmail.com')).toThrow(
    'URL not supported!',
  );
});

test('getProvider: youtube.com', () => {
  expect(
    extract.getProvider('https://www.youtube.com/watch?v=-ELSsP9MDt0'),
  ).toBe('youtube');
});

test('getProvider: youtu.be', () => {
  expect(
    extract.getProvider('https://youtu.be/-ELSsP9MDt0?si=On79Hs36qjSpWghn'),
  ).toBe('youtube');
});

test('getProvider: m.youtube.com', () => {
  expect(extract.getProvider('https://m.youtube.com/watch?v=lalOy8Mbfdc')).toBe(
    'youtube',
  );
});

test('getProvider: vimeo.com', () => {
  expect(extract.getProvider('https://vimeo.com/76979871')).toBe('vimeo');
});

test('getProvider: loom.com', () => {
  expect(
    extract.getProvider(
      'https://www.loom.com/embed/e5b8c04bca094dd8a5507925ab887002',
    ),
  ).toBe('loom');
});

test('getProvider: codepen.io', () => {
  expect(
    extract.getProvider('https://codepen.io/roniee_1993/pen/jEbaJBm'),
  ).toBe('codepen');
});

test('getProvider: codesandbox.io', () => {
  expect(
    extract.getProvider('https://codesandbox.io/p/sandbox/react-new'),
  ).toBe('codesandbox');
});

test('check: Empty Input', () => {
  expect(
    extract.getId({
      link: 'https://www.youtube.com/watch?v=-ELSsP9MDt0',
      provider: 'youtube',
    }),
  ).toBe('-ELSsP9MDt0');
});
