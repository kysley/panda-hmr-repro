import { defineConfig } from "@pandacss/dev";
import { phoenixPreset } from "./src";

const pandaPreset = defineConfig({
	// Whether to use css reset
	preflight: true,

	clean: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	presets: [phoenixPreset],

	// presets: ["@pandacss/preset-base"],

	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
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
	// Don't use emitPackage in favor of importMap https://discord.com/channels/1118988919804010566/1194291710566604870/1194292482045907036
	// emitPackage: true,
});

export default pandaPreset;
