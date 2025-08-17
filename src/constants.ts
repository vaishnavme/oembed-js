export const providers = {
  youtube: 'youtube',
  vimeo: 'vimeo',
  loom: 'loom',
  codepen: 'codepen',
  codesandbox: 'codesandbox',
} as const;

export const supported_urls = {
  'youtu.be': 'youtu.be',
  'm.youtube.com': 'm.youtube.com',
};

export const regexs = {
  [providers.youtube]:
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/,
};
