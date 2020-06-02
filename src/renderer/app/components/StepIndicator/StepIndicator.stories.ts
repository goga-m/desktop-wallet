import { number, withKnobs } from "@storybook/addon-knobs";

import StepIndicator from "./StepIndicator.vue";

export default { title: "Basic / StepIndicator", decorators: [withKnobs] };

export const Default = () => ({
	components: { StepIndicator },
    props: {
		activeIndex: {
			default: number("Active Index", 1),
		},
		size: {
			default: number("Size", 2),
		},
	},
	template: `
		<div class="space-x-4 p-5">
			<StepIndicator :activeIndex="activeIndex" :size="size"></StepIndicator>
		</div>
	`,
});
