import type { providers } from './constants.js';

export type Providers = (typeof providers)[keyof typeof providers];
