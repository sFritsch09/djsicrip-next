// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// ...
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/_components/*.js',
		'./app/*.js',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: ['class'],
	plugins: [
		nextui({
			themes: {
				dark: {
					colors: {
						content1: '#83C5BE',
						DEFAULT: '#EDF6F9',
						content2: '#006d77',
						background: '#83C5BE',
						foreground: '#EDF6F9',
						primary: {
							default: '#F39555',
							DEFAULT: '#EDF6F9',
							foreground: '#83C5BE',
							50: '#006d77',
							100: '#006d77',
							300: '#EDF6F9',
							500: '#EDF6F9',
						},
						secondary: {
							DEFAULT: '#006d77',
							foreground: '#EDF6F9',
							100: '#006d77',
							200: '#006d77',
							300: '#006d77',
							500: '#006d77',
						},
						success: {
							DEFAULT: '#F39555',
						},
						default: {
							foreground: '#EDF6F9',
							DEFAULT: '#83C5BE',
							50: '#006d77',
							100: '#006d77',
							200: '#E29578',
							300: '#E29578',
							400: '#E29578',
							500: '#EDF6F9',
							600: '#EDF6F9',
						},
						focus: '#E29578',
					},
				},
				light: {
					colors: {
						content1: '#FFDDD2',
						DEFAULT: '#002f33',
						content2: '#E29578',
						foreground: '#E29578',
						primary: {
							DEFAULT: '#002f33',
							foregroun: '#FFDDD2',
							50: '#FFDDD2',
							100: '#E29578',
							200: '#EDF6F9',
							300: '#002f33',
							500: '#002f33',
						},
						secondary: {
							DEFAULT: '#E29578',
							foreground: '#EDF6F9',
							100: '#E29578',
							200: '#E29578',
							300: '#E29578',
							500: '#E29578',
						},
						success: {
							DEFAULT: '#006d77',
						},
						default: {
							foreground: '#EDF6F9',
							DEFAULT: '#E29578',
							50: '#E29578',
							100: '#E29578',
							200: '#E29578',
							300: '#E29578',
							400: '#E29578',
							500: '#EDF6F9',
						},
						focus: '#F39555',
					},
				},
			},
		}),
	],
};
