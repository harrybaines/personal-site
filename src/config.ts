// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Harry Baines";
export const SITE_DESCRIPTION = "Coder | ML Engineer | Developer";

export const MY_NAME = "Harry Baines";
export const EMAIL = 'harryb0905@googlemail.com'
export const GITHUB = 'https://github.com/harrybaines'
export const TWITTER = "https://twitter.com/harryb0905";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
