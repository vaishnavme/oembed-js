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
        const parsed = link.match(regexs[providers.youtube]);

        if (!parsed || !parsed[1]) {
          throw new Error('Embed is not supported for this URL');
        }
        return parsed[1];
      }

      default:
        return null;
    }
  }
}

export default Extract;
