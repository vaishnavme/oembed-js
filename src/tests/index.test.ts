import { test, expect } from 'vitest';
import oembed from '../index.js';

test('getProvider: Unsupported URL', () => {
  expect(() => oembed.getProvider('https://gmail.com')).toThrow(
    'URL not supported!',
  );
});

test('getProvider: youtube.com', () => {
  expect(
    oembed.getProvider('https://www.youtube.com/watch?v=-ELSsP9MDt0'),
  ).toBe('youtube');
});

test('getProvider: youtu.be', () => {
  expect(
    oembed.getProvider('https://youtu.be/-ELSsP9MDt0?si=On79Hs36qjSpWghn'),
  ).toBe('youtube');
});

test('getProvider: m.youtube.com', () => {
  expect(oembed.getProvider('https://m.youtube.com/watch?v=lalOy8Mbfdc')).toBe(
    'youtube',
  );
});

test('getProvider: vimeo.com', () => {
  expect(oembed.getProvider('https://vimeo.com/76979871')).toBe('vimeo');
});

test('getProvider: loom.com', () => {
  expect(
    oembed.getProvider(
      'https://www.loom.com/embed/e5b8c04bca094dd8a5507925ab887002',
    ),
  ).toBe('loom');
});

test('getProvider: codepen.io', () => {
  expect(oembed.getProvider('https://codepen.io/roniee_1993/pen/jEbaJBm')).toBe(
    'codepen',
  );
});

test('getProvider: codesandbox.io', () => {
  expect(oembed.getProvider('https://codesandbox.io/p/sandbox/react-new')).toBe(
    'codesandbox',
  );
});

test('getId: youtube.com embed', () => {
  expect(
    oembed.getId(
      'https://www.youtube.com/embed/po663TAfeOE?si=v4VQ3BdjqBxMehuK',
    ),
  ).toStrictEqual({ id: 'po663TAfeOE' });
});

test('getId: youtube.com video', () => {
  expect(
    oembed.getId('https://www.youtube.com/watch?v=-ELSsP9MDt0'),
  ).toStrictEqual({ id: '-ELSsP9MDt0' });
});

test('getId: youtu.be video', () => {
  expect(
    oembed.getId('https://youtu.be/EjvyBDK8g7Y?si=2h3JnJ7MUgU72erc'),
  ).toStrictEqual({ id: 'EjvyBDK8g7Y' });
});

test('getId: youtube.com playlist', () => {
  expect(
    oembed.getId(
      'https://youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&si=hKFGa-gjceCRSknB',
    ),
  ).toStrictEqual({ id: 'PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP' });
});

test('getId: youtube.com playlist embed', () => {
  expect(
    oembed.getId(
      'https://www.youtube.com/embed/videoseries?si=o3-gkHiOvzf2boq7&amp;list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP',
    ),
  ).toStrictEqual({ id: 'PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP' });
});

test('getId: loom.com share', () => {
  expect(
    oembed.getId(
      'https://www.loom.com/share/912e89a68ccc42c5ab5096fec7cd63d6?sid=ea81dbca-d822-4b98-bf8f-89a447f31801',
    ),
  ).toStrictEqual({ id: '912e89a68ccc42c5ab5096fec7cd63d6' });
});

test('getId: loom.com embed', () => {
  expect(
    oembed.getId(
      'https://www.loom.com/embed/e5b8c04bca094dd8a5507925ab887002?sid=0f136068-cf47-494a-9057-b1b07f973cea&hideEmbedTopBar=true',
    ),
  ).toStrictEqual({ id: 'e5b8c04bca094dd8a5507925ab887002' });
});

test('getId: vimeo.com', () => {
  expect(
    oembed.getId('https://vimeo.com/1016625668?fl=pl&fe=sh'),
  ).toStrictEqual({ id: '1016625668' });
});

test('getId: vimeo.com embed', () => {
  expect(
    oembed.getId('https://player.vimeo.com/video/1016625668?h=b71bbce9d6'),
  ).toStrictEqual({ id: '1016625668' });
});

test('getId: codepen.io', () => {
  expect(
    oembed.getId('https://codepen.io/BalintFerenczy/pen/KwdoyEN'),
  ).toStrictEqual({ username: 'BalintFerenczy', id: 'KwdoyEN' });
});

test('getId: codepen.io embed', () => {
  expect(
    oembed.getId(
      'https://codepen.io/simeydotme/embed/preview/abYWJdX?default-tab=js%2Cresult&theme-id=dark',
    ),
  ).toStrictEqual({ username: 'simeydotme', id: 'abYWJdX' });
});

test('getId: codesandbox.io', () => {
  expect(
    oembed.getId('https://codesandbox.io/p/sandbox/editor-w75ob2'),
  ).toStrictEqual({ id: 'w75ob2' });
});

test('getId: codesandbox.io embed', () => {
  expect(
    oembed.getId(
      'https://codesandbox.io/embed/w75ob2?view=editor+%2B+preview&module=%2Fsrc%2FApp.js',
    ),
  ).toStrictEqual({ id: 'w75ob2' });
});
