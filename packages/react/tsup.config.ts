import { defineConfig } from "tsup";

// This works to an extent.
// No .mjs with type:module
// tree shaking doesnt seem to work in storybook?

export default defineConfig((currentOptions) => ({
	...currentOptions,
	outDir: "dist",
	format: ["cjs", 'esm'],
	dts: true,
	platform: "browser",
	external: ["react"],
	// It only clears the build folder if it is not watching, it reduces the amount of time you need to restart the TypeScript server
	clean: !currentOptions.watch,
	splitting: true,
	treeshake: true,
	entry: ["src/index.ts"]
	// entry: ["./components/core/!(index).ts?(x)"],
}));

// export default defineConfig([
// 	// expose 1 module per component
// 	{
// 		clean: true,
// 		dts: true,
// 		splitting: true,
// 		// minify: false,
// 		// bundle: false,
// 		// sourcemap: true,
// 		// tsconfig: path.resolve(__dirname, "./tsconfig.build.json"),
// 		// entry: ["src/index.ts"],
// 		entry: ["src/components/**/!(index).ts?(x)"],
// 		format: ["esm"],
// 		outDir: "dist",
// 		external: ['react'],
// 		esbuildOptions(options, context) {
// 			// the directory structure will be the same as the source
// 			options.outbase = "./";
// 		},
// 	},
// 	{
// 		clean: true,
// 		sourcemap: true,
// 		// tsconfig: path.resolve(__dirname, "./tsconfig.build.json"),
// 		entry: ["src/index.ts", "src/components/index.ts"],
// 		bundle: false,
// 		format: ["esm"],
// 		outDir: "dist",
// 		// esbuildOptions(options, context) {
// 		// 	options.outbase = "./src";
// 		// },
// 	},
// ]);
