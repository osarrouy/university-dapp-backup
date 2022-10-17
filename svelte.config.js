import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$lib: 'src/lib',
			$stores: 'src/stores',
			$styles: 'src/styles'
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
