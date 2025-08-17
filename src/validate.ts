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
}

const validate = new Validate();
export default validate;
