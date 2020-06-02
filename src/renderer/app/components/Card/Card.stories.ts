import { select, text, withKnobs } from "@storybook/addon-knobs";

import Card from "./Card.vue";

export default { title: "Basic / Card", decorators: [withKnobs] };

export const Network = () => ({
	components: { Card },
    props: {
		networkName: {
			default: text("Network Name", "Bitcoin"),
		},
	},
	template: `
		<div class="space-x-4 p-5">
			<Card :networkName="networkName"></Card>
		</div>
	`,
});
