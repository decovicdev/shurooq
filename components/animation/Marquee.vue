<script setup lang="ts">
import { Motion } from "motion/vue";
defineOptions({
	inheritAttrs: false,
});

const { direction = "right" } = defineProps<{ direction?: "left" | "right" }>();
const transition = {
	easing: "linear",
	repeat: Infinity,
	duration: 5,
	direction: direction === "right" ? "normal" : "reverse",
} as const;
</script>

<template>
	<Motion
		v-bind="$attrs"
		:initial="{ x: 0 }"
		:animate="{
			x: 'calc(-50% - 32px)',
		}"
		:transition="transition"
		class="w-max">
		<slot></slot>
		<slot></slot>
	</Motion>
</template>
