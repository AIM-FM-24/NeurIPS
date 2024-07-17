// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
            // fallback: 'index.html', // may differ from host to host
			// pages: "github-pages"
        })
	},

	ssr: {
		noExternal: ['svelte-awesome']
	},

	paths: {
		base: process.env.NODE_ENV === 'production' ? '/cvpr24' : '',
	}
};

export default config;
