export const extractHostname = (hostname: string) => {
  // Step 1: strip common prefixes
  let cleaned = hostname.replace(/^(www\.|m\.)/, '');

  // Step 2: split into parts
  const parts = cleaned.split('.');

  // Handle common cases like .com, .io, .co.uk etc.
  if (parts.length > 2) {
    // For domains like "subdomain.youtube.com" → "youtube"
    return parts[parts.length - 2];
  } else {
    // For simple domains like "youtube.com" → "youtube"
    return parts[0];
  }
};

export const isEmpty = (link: string) => {
  if (!link || !link?.trim().length) {
    return true;
  }
  return false;
};

export const isValidURL = (link: string) => {
  try {
    const url = new URL(link);
    return true;
  } catch {
    return false;
  }
};
