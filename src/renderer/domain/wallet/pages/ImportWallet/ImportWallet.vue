<template>
	<div class="w-full flex flex-col justify-center items-center">
		<div class="w-2/4">
			<StepIndicator></StepIndicator>
			<div class="ImportWallet__content mt-10">
				<div class="ImportWallet__content_header">
					<p class="ImportWallet__header__title font-bold text-4xl">Network for import</p>
					<p
						class="ImportWallet__header__subtitle text-medium"
					>Select the network where you want to import your wallet</p>
				</div>
				<div class="ImportWallet__networks mt-5">
					<Card
						class="mb-3"
						v-for="network in networks"
						:title="network.name"
						v-bind:key="network.name"
						:selected="network.name === selectedNetwork"
						@click.native="selectNetwork(network.name)"
					></Card>
				</div>
			</div>
			<div class="mt-10">
				<XButton color="primary" variant="plain">Back</XButton>
				<XButton color="primary">Continue</XButton>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/app/components/Card/Card.vue";
import StepIndicator from "@/app/components/StepIndicator/StepIndicator.vue";
import XButton from "@/app/components/Button/Button.vue";

@Component({
	components: {
		Card,
		StepIndicator,
		XButton,
	},
})
export default class ImportWallet extends Vue {
	public selectedNetwork = "";

	public networks = [
		{
			name: "ARK Ecosystem",
		},
		{
			name: "Ethereum",
		},
		{
			name: "Bitcoin",
		},
	];

	public selectNetwork(name: string) {
		this.selectedNetwork = name;
	}
}
</script>

<style scoped>
.ImportWallet__header__title {
	color: theme("colors.black");
}
</style>
