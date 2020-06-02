import StepIndicator from "@/app/components/StepIndicator/StepIndicator.vue";

import ImportWallet from "./ImportWallet.vue";

export default { title: "Wallet / Import" };

export const Default = () => ({
	components: { ImportWallet, StepIndicator },
	template: `<ImportWallet class="p-5"></ImportWallet>`,
});
