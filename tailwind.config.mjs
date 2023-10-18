/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				mplus: ['M PLUS 1', 'Verdana', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
