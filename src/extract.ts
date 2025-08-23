import { providers, regexs, supported_urls } from './constants.js';
import type { Providers } from './global.types.js';
import { extractHostname } from './utils.js';
import validate from './validate.js';

class Extract {
  getProvider(link: string) {
    const isValid = validate.check(link);
    if (!isValid) return;

    const url = new URL(link);
    const hostname = extractHostname(url.hostname);

    const provider = Object.values(providers).find((host) => hostname === host);

    if (provider) {
      return provider;
    }

    switch (true) {
      case url.hostname.includes(supported_urls['youtu.be']):
      case url.hostname.includes(supported_urls['m.youtube.com']):
        return providers.youtube;

      default:
        throw new Error('URL not supported!');
    }
  }

  getId({ link, provider }: { link: string; provider: Providers }) {
    switch (provider) {
      case providers.youtube: {
        const playlistMatch = link
          .replace(/&amp;/g, '&')
          .match(regexs.youtube_playlist);
        if (playlistMatch && playlistMatch[1])
          return {
            id: playlistMatch[1],
          };

        const videoMatch = link.match(regexs.youtube_video);
        if (videoMatch && videoMatch[1]) {
          return { id: videoMatch[1] };
        }

        validate.unsupportedEmbed();
        return;
      }

      case providers.loom: {
        const loomMatch = link.match(regexs.loom);
        if (loomMatch && loomMatch[1]) {
          return { id: loomMatch[1] };
        }

        validate.unsupportedEmbed();
        return;
      }

      case providers.vimeo: {
        const vimeoMatch = link.match(regexs.vimeo);
        if (vimeoMatch && vimeoMatch[1]) {
          return { id: vimeoMatch[1] };
        }
        validate.unsupportedEmbed();
        return;
      }

      case providers.codepen: {
        const codepenMatch = link.match(regexs.codepen);
        if (codepenMatch && codepenMatch[2]) {
          return {
            username: codepenMatch[1],
            id: codepenMatch[2],
          };
        }
        validate.unsupportedEmbed();
        return;
      }

      case providers.codesandbox: {
        const codesandboxMatch = link.match(regexs.codesandbox);
        if (codesandboxMatch && codesandboxMatch[1]) {
          return { id: codesandboxMatch[1] };
        }
        validate.unsupportedEmbed();
        return;
      }

      default:
        validate.unsupportedEmbed();
        return;
    }
  }
}

export default Extract;
