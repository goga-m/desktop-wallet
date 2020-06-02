<template>
	<div class="StepIndicator flex w-full" data-testid="StepIndicator">
		<div
			v-for="index in size"
			class="StepIndicator__step flex-1 mr-2 rounded-lg"
			v-bind:key="'step' + index"
			data-testid="StepIndicator__step"
			v-bind:class="{'active': activeIndex == index}"
		></div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class StepIndicator extends Vue {
	@Prop({ default: 0 }) public activeIndex!: number;
	@Prop({ default: 2 }) public size!: number;
}
</script>

<style lang="postcss" scoped>
transition div {
	transition: background-color 1s;
}

.StepIndicator__step {
	min-height: 2px;
	min-width: auto;
	background-color: theme("colors.gray.200");
	&.active {
		background-color: theme("colors.yellow.600");
	}
}
</style>
