import { shallowMount } from "@vue/test-utils";

import Card from "@/app/components/Card/Card.vue";

describe("Card", () => {
	it("should render", () => {
		const wrapper = shallowMount(Card);

		expect(wrapper.find(".Card")).toBeTruthy();
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should render with the configured title", () => {
		const wrapper = shallowMount(Card, {
			propsData: {
				title: "Test",
			},
		});

		const title = wrapper.find(`[data-testid="Card__title"]`);
		expect(title.text()).toBe("Test");
		expect(wrapper.html()).toMatchSnapshot();
	});
});
