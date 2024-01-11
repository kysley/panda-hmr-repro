import { defineConfig, Options } from "tsup";
import { version } from "./package.json";

export default defineConfig((currentOptions) => ({
	...currentOptions,
	entry: ["src/index.ts", "src/panda-preset.ts"],
	external: ["#acme/system"],
	outDir: "dist",
	format: ["cjs", "esm"],
	dts: true,
	platform: "browser",
	// Alex;
	// We use this eslint plugin in the actual repo as we are migrating from VE
	esbuildPlugins: [
		// This casting is necessary because `vanillaExtractPlugin` use a different `esbuild` version from `tsup`.
		// vanillaExtractPlugin({
		// 	identifiers: ({ hash }) => `v${version.replace(/\W/g, "")}_${hash}`, // Remove non-alphanumeric characters from version
		// }) as Required<Options>["esbuildPlugins"][number],
	],
	// external: ["react"],
	// It only clears the build folder if it is not watching, it reduces the amount of time you need to restart the TypeScript server
	clean: !currentOptions.watch,
}));
