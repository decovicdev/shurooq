<script lang="ts" setup>
import { Dialog, DialogOverlay, DialogPanel } from "@headlessui/vue";
import img8 from "../assets/images/european_global_banking_finance_awards.webp";
import img4 from "../assets/images/sharjah_government_communication_award.webp";
import img5 from "../assets/images/global_infrastructure_partners.webp";
import img3 from '"../assets/images/ministry_of_foreign_affairs.webp';
import img2 from "../assets/images/site_selection_magazine.webp";
import img1 from "../assets/images/arabian_travel_awards.webp";
import img7 from "../assets/images/architect_awards.webp";
import img6 from "../assets/images/slo.webp";

const awards = [
	{
		imageSrc: img1,
		title: "Best Tourism Investment Authority",
		date: "2019",
	},
	{
		imageSrc: img2,
		title: "Top Investment Promotion Agency",
		date: "2015",
	},
	{
		imageSrc: img3,
		title: "Partners Award of the Ministry of Foreign Affairs and International Cooperation",
		date: "2018",
	},
	{
		imageSrc: img4,
		title: "Best Government Communication ",
		date: "2015",
	},
	{
		imageSrc: img5,
		title: "Regional Infrastructure Award",
		date: "2018",
	},
	{
		imageSrc: img6,
		title: "Honoured for Excellence in Quality, From Business Triumph Festival ",
		date: "2018",
	},
	{
		imageSrc: img7,
		title: "GCC Hospitality and Leisure Project of the Year",
		date: "2012",
	},
	{
		imageSrc: img8,
		title: "The Banking Awards 2013 - FDI Agency of the Year in the Mena region",
		date: "2013",
	},
];
const selectedAward = ref<(typeof awards)[number] | null>(null);
</script>

<template>
	<Dialog :open="Boolean(selectedAward)" @close="() => (selectedAward = null)">
		<DialogOverlay class="fixed inset-0 z-[100] grid place-items-center bg-gray-900/90">
			<DialogPanel class="flex max-w-lg bg-white px-10 py-8 shadow-2xl">
				<img class="w-[100px] object-contain" :src="selectedAward?.imageSrc" />
				<p class="p-5">
					{{ selectedAward?.title }}, <br />
					{{ selectedAward?.date }}
				</p>
			</DialogPanel>
		</DialogOverlay>
	</Dialog>
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
				<button @click="selectedAward = award" v-for="award in awards">
					<img class="h-[100px] object-fill saturate-0 hover:saturate-200" :src="award.imageSrc" />
				</button>
			</div>
		</div>
	</section>
</template>
