import { defineConfig } from "@pandacss/dev";
import { phoenixPreset } from "@acme/core";

export default defineConfig({
	presets: [phoenixPreset],
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./stories/**/*.{js,jsx,ts,tsx}",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "styled-system",

	// https://nodejs.org/api/packages.html#subpath-imports
	importMap: {
		css: "#acme/system/css",
		recipes: "#acme/system/recipes",
		patterns: "#acme/system/patterns",
		jsx: "#acme/system/jsx",
	},
});
