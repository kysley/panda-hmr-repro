import { dirname, join } from "path";
const path = require("path");
const { mergeConfig } = require("vite");

module.exports = {
	stories: ["../stories/**/*.mdx", "../stories/**/*.stories.tsx"],
	core: { builder: "@storybook/builder-vite" },
	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-a11y"),
	],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			resolve: {
				alias: [

				],
			},
		});
	},
	docs: {
		autodocs: true,
	},
};

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, "package.json")));
}
