import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'node:path';

const PACKAGE_ROOT = __dirname;

/** @type {import('vite').UserConfig} */
const config = {
	root: PACKAGE_ROOT,
	resolve: {
    alias: {
      '$comp/': join(PACKAGE_ROOT, 'src/components') + '/',
    },
  },

	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
