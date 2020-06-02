import { select, text, withKnobs } from "@storybook/addon-knobs";

import Card from "./Card.vue";

export default { title: "Basic / Card", decorators: [withKnobs] };

export const Default = () => ({
	components: { Card },
    props: {
		title: {
			default: text("Card title", "Bitcoin"),
		},
	},
	template: `
		<div class="space-x-4 p-5">
			<Card :title="title"></Card>
		</div>
	`,
});
