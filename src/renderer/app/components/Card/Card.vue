<template>
	<div class="Card rounded-lg flex border w-full items-center" v-bind:class="{'selected': selected}">
		<div
			class="Card__content__image rounded-full border w-12 h-12 flex justify-center items-center ml-3"
			v-bind:class="{'selected': selected}"
		>
			<!-- TODO: This should be replaced with the correspondent network image-->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-6 h-6">
				<path
					d="M0 10C0 4.5 4.5 0 10 0s10 4.5 10 10-4.5 10-10 10S0 15.5 0 10zm2 0c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zm7 4c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zm0-3V6c0-.6.4-1 1-1s1 .4 1 1v5c0 .6-.4 1-1 1s-1-.4-1-1z"
					fill="currentColor"
				/>
			</svg>
		</div>
		<span
			v-if="title"
			data-testid="Card__title"
			class="Card__content__title ml-3 font-bold text-base"
		>{{ title }}</span>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
	@Prop({ default: true }) public selected!: boolean;
	@Prop({ default: "" }) public title!: string;
}
</script>

<style lang="postcss" scoped>
.Card {
	padding: 1rem;
	color: theme("colors.gray.900");
	&.selected {
		@apply bg-green-100;
		border: theme("borderWidth.2") solid theme("colors.green.500");
	}

	.Card__content__image {
		border: theme("borderWidth.1") solid theme("colors.gray.400");
		&.selected {
			border: theme("borderWidth.1") solid theme("colors.gray.300");
			color: theme("colors.green.600");
		}
	}
}
</style>
