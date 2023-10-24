<script lang="ts" setup>
const src_s = [
	import.meta.resolve("../assets/images/arabian_travel_awards.webp"),
	import.meta.resolve("../assets/images/site_selection_magazine.webp"),
	import.meta.resolve("../assets/images/ministry_of_foreign_affairs.webp"),
	import.meta.resolve("../assets/images/sharjah_government_communication_award.webp"),
	import.meta.resolve("../assets/images/global_infrastructure_partners.webp"),
	import.meta.resolve("../assets/images/slo.webp"),
	import.meta.resolve("../assets/images/architect_awards.webp"),
	import.meta.resolve("../assets/images/european_global_banking_finance_awards.webp"),
];
</script>

<template>
	<section
		class="items-center justify-center gap-14 bg-[#f4f4f4] p-8 lg:flex lg:justify-start lg:p-16">
		<div class="max-w-lg">
			<h4 class="text-4xl font-black">
				Facilitating the social, cultural, environmental and economic development of Sharjah
			</h4>
			<p class="mt-8 text-lg text-gray-lighter">
				Over the years, Sharjah has grown into a centre for arts and culture as well as a leading
				industrial hub
			</p>
		</div>
		<div class="flex-1">
			<p class="mb-5 mt-16 text-center text-xl font-bold">Awards</p>
			<div class="grid grid-cols-2 place-items-center gap-10 md:grid-cols-4">
				<img
					class="h-[100px] object-fill saturate-0 hover:saturate-200"
					:src="src"
					v-for="src in src_s" />
			</div>
		</div>
	</section>
</template>
