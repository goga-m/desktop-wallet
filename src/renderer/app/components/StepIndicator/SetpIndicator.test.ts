import { shallowMount } from "@vue/test-utils";

import StepIndicator from "@/app/components/StepIndicator/StepIndicator.vue";

describe("StepIndicator", () => {
	it("should render", () => {
		const wrapper = shallowMount(StepIndicator);

		expect(wrapper.find(".StepIndicator")).toBeTruthy();
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should render with the configured size", () => {
		const wrapper = shallowMount(StepIndicator, {
			propsData: {
				size: 3,
			},
		});

		const steps = wrapper.findAll(`[data-testid="StepIndicator__step"]`);
		expect(steps.length).toEqual(3);
	});
	
    it("should have the right active index", () => {
		const wrapper = shallowMount(StepIndicator, {
			propsData: {
				size: 3,
                activeIndex: 1,
			},
		});

		const steps = wrapper.findAll(`[data-testid="StepIndicator__step"]`);
    
		expect(steps.wrappers[0].classes()).toContain("active");
	});
});
