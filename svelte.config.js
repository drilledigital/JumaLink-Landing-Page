import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      handleMissingId: 'ignore',
      handleHttpError: 'ignore'
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true
    })
  }
};

export default config;
