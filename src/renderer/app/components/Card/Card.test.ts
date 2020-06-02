import { shallowMount } from "@vue/test-utils";

import Card from "@/app/components/Card/Card.vue";

describe("Card", () => {
	it("should render", () => {
		const wrapper = shallowMount(Card);

		expect(wrapper.find(".Card")).toBeTruthy();
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should render with network name", () => {
		const wrapper = shallowMount(Card, {
			propsData: {
				networkName: "Test",
			},
		});

		const networkName = wrapper.find(`[data-testid="Card__networkName"]`);
		expect(networkName.text()).toBe("Test");
		expect(wrapper.html()).toMatchSnapshot();
	});
});
