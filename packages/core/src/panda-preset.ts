import { definePreset } from "@pandacss/dev";
import { buttonRecipe } from "./components/panda";

const phoenixPreset = definePreset({
	theme: {
		slotRecipes: {
			button: buttonRecipe,
		},
		// Alex;
		// Theme removed for brevity. We don't have any problems with typescript or accessing theme variables.
		semanticTokens: {},
	},
});

export { phoenixPreset };
