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

test('getId: youtube.com embed', () => {
  expect(
    extract.getId({
      link: 'https://www.youtube.com/embed/po663TAfeOE?si=v4VQ3BdjqBxMehuK',
      provider: 'youtube',
    }),
  ).toBe('po663TAfeOE');
});

test('getId: youtube.com video', () => {
  expect(
    extract.getId({
      link: 'https://www.youtube.com/watch?v=-ELSsP9MDt0',
      provider: 'youtube',
    }),
  ).toBe('-ELSsP9MDt0');
});

test('getId: youtu.be video', () => {
  expect(
    extract.getId({
      link: 'https://youtu.be/EjvyBDK8g7Y?si=2h3JnJ7MUgU72erc',
      provider: 'youtube',
    }),
  ).toBe('EjvyBDK8g7Y');
});

test('getId: youtube.com playlist', () => {
  expect(
    extract.getId({
      link: 'https://youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&si=hKFGa-gjceCRSknB',
      provider: 'youtube',
    }),
  ).toBe('PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP');
});

test('getId: youtube.com playlist embed', () => {
  expect(
    extract.getId({
      link: 'https://www.youtube.com/embed/videoseries?si=o3-gkHiOvzf2boq7&amp;list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP',
      provider: 'youtube',
    }),
  ).toBe('PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP');
});

test('getId: loom.com share', () => {
  expect(
    extract.getId({
      link: 'https://www.loom.com/share/912e89a68ccc42c5ab5096fec7cd63d6?sid=ea81dbca-d822-4b98-bf8f-89a447f31801',
      provider: 'loom',
    }),
  ).toBe('912e89a68ccc42c5ab5096fec7cd63d6');
});

test('getId: loom.com embed', () => {
  expect(
    extract.getId({
      link: 'https://www.loom.com/embed/e5b8c04bca094dd8a5507925ab887002?sid=0f136068-cf47-494a-9057-b1b07f973cea&hideEmbedTopBar=true',
      provider: 'loom',
    }),
  ).toBe('e5b8c04bca094dd8a5507925ab887002');
});

test('getId: vimeo.com', () => {
  expect(
    extract.getId({
      link: 'https://vimeo.com/1016625668?fl=pl&fe=sh',
      provider: 'vimeo',
    }),
  ).toBe('1016625668');
});

test('getId: vimeo.com embed', () => {
  expect(
    extract.getId({
      link: 'https://player.vimeo.com/video/1016625668?h=b71bbce9d6',
      provider: 'vimeo',
    }),
  ).toBe('1016625668');
});

test('getId: codepen.io', () => {
  expect(
    extract.getId({
      link: 'https://codepen.io/BalintFerenczy/pen/KwdoyEN',
      provider: 'codepen',
    }),
  ).toStrictEqual({ username: 'BalintFerenczy', id: 'KwdoyEN' });
});

test('getId: codepen.io embed', () => {
  expect(
    extract.getId({
      link: 'https://codepen.io/simeydotme/embed/preview/abYWJdX?default-tab=js%2Cresult&theme-id=dark',
      provider: 'codepen',
    }),
  ).toStrictEqual({ username: 'simeydotme', id: 'abYWJdX' });
});

test('getId: codesandbox.io', () => {
  expect(
    extract.getId({
      link: 'https://codesandbox.io/p/sandbox/editor-w75ob2',
      provider: 'codesandbox',
    }),
  ).toBe('w75ob2');
});

test('getId: codesandbox.io embed', () => {
  expect(
    extract.getId({
      link: 'https://codesandbox.io/embed/w75ob2?view=editor+%2B+preview&module=%2Fsrc%2FApp.js',
      provider: 'codesandbox',
    }),
  ).toBe('w75ob2');
});
