import { defineSlotRecipe } from "@pandacss/dev";

export const buttonRecipe = defineSlotRecipe({
	className: "button",
	slots: ["button"],
	base: {
		button: {
			color: "black",
			backgroundColor: "blue",
			height: "50px",
		},
	},
});
