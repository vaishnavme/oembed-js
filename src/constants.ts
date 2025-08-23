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
  youtube_video:
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/,
  youtube_playlist: /[?&]list=([^#&?]+)/,
  loom: /\/(?:share|embed)\/([0-9a-fA-F]+)(?=\b|[?/])/,
  vimeo: /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/,
  codepen: /codepen\.io\/([^\/]+)\/(?:embed\/preview|pen)\/([^\/\?]+)/,
  codesandbox: /codesandbox\.io\/(?:embed\/|p\/sandbox\/[\w-]+-)([^\/\?\s]+)/,
};
