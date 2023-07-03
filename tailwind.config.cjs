/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,pug,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Raleway"', "sans-serif"],
			},
			colors: {
				// custom rules for starter web page, remove these for your own project
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				secondary: "rgb(var(--color-secondary) / <alpha-value>)",
				tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
				dark: "rgb(var(--color-dark) / <alpha-value>)",
				light: "rgb(var(--color-light) / <alpha-value>)",
			},
		},
	},
};
