import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		alias: {
			$components: 'src/lib/components',
			$assets: 'src/lib/assets',
			$locales: 'src/lib/locales',
			$lib: 'src/lib',
		}
	}
};

export default config;
