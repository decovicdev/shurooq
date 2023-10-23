<script setup lang="ts">
import { Motion } from "motion/vue";
defineOptions({
	inheritAttrs: false,
});
</script>

<template>
	<div class="overflow-hidden">
		<Motion
			v-bind="$attrs"
			:initial="{ x: 0 }"
			:animate="{
				x: 'calc(-50% - 32px)',
			}"
			:transition="{ easing: 'linear', repeat: Infinity, duration: 5 }"
			class="w-max">
			<slot></slot>
			<slot></slot>
		</Motion>
	</div>
</template>
