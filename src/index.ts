/**
 * API Surface
 *
 * Main entry
 * oembed.parse(link, options)
 * - outpute { id, embedURL, iframe, link, provider }
 *
 * Shortcuts:
 * oembed.getId(link)
 * output: id
 *
 *
 * oembed.getEmbedURL(link)
 * output: embedURL
 *
 *
 * oembed.getIframe(link)
 * output: iframe
 *
 *
 * oembed.getProvider(link)
 * output: provider (eg.: youtube, vimeo, twitter)
 */

import Extract from './extract.js';

class OEmbed {
  #extracter = new Extract();

  getProvider(link: string) {
    return this.#extracter.getProvider(link);
  }

  getId(link: string) {
    const provider = this.getProvider(link);
    if (provider) {
      return this.#extracter.getId({ link, provider });
    }
  }
}

const oembed = new OEmbed();
export default oembed;
