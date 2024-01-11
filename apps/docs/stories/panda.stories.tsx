import { Meta, StoryObj } from "@storybook/react";

import { PlaceholderComponent } from "@acme/react";

import { css } from "#acme/system/css";
import { button } from "#acme/system/recipes";

export default {
	component: PlaceholderComponent,
	title: "PlaceholderComponent",
} satisfies Meta<typeof PlaceholderComponent>;

type Story = StoryObj<typeof PlaceholderComponent>;

export const Default: Story = {
	render: () => (
		<div data-theme="phx" data-color-mode="light">
			<PlaceholderComponent />
			<button className={button().button} type="button">
				this recipe won't HMR
			</button>
			<div
				className={css({
					background: "orange",
					width: "55px",
				})}
			>
				changes to this component using css() will accept HMR
			</div>
		</div>
	),
};
