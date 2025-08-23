import { providers, supported_urls } from './constants.js';
import { extractHostname, isEmpty, isValidURL } from './utils.js';

class Validate {
  check(link: string) {
    if (isEmpty(link)) {
      throw new Error('URL not provided!');
    }

    const isValid = isValidURL(link);
    if (!isValid) {
      throw new Error('Invlid URL!');
    }

    return true;
  }

  unsupportedEmbed() {
    throw new Error('Embed is not supported for this URL');
  }
}

const validate = new Validate();
export default validate;
