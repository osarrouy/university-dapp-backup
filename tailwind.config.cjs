/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			blue: '#1fb6ff',
			purple: '#7e5bef',
			red: '#f54260',
			pink: '#ff49db',
			orange: '#ff7849',
			green: '#13ce66',
			yellow: '#ffc82c',
			'grey-dark': '#0D0F13',
			'grey-light': '#2D2F33',
			black: '#1A1A2E'
		}
	},
	plugins: []
};
