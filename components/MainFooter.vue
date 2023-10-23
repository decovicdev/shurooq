<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

const links = [
	{
		name: "Why sharjah",
		link: "/",
	},
	{
		name: "Shurooq",
		link: "/",
	},
	{
		name: "Invest in sharjah",
		link: "/",
	},
	{
		name: "Destination portfolio",
		link: "/",
	},
	{
		name: "Investment portfolio",
		link: "/",
	},
	{
		name: "Contact",
		link: "/",
	},
];
</script>

<template>
	<footer class="relative gap-6 overflow-hidden bg-gray-darker md:flex lg:gap-24 lg:px-16">
		<img
			class="absolute right-0 top-1/2 hidden h-[170%] -translate-y-1/2 object-center opacity-10 lg:block"
			src="../assets/images/why-sharjah.webp"
			draggable="false"
			loading="lazy" />
		<div
			class="flex-shrink-1 max-w-md flex-grow-0 bg-gray-dark p-4 text-ss/5 text-gray-lighter md:p-12">
			<img class="max-w-[349px] object-cover" src="../assets/images/Logo_WHITE.png" />
			<p class="mt-6">
				Source: Sharjah Update | Published:<br />
				October 12, 2020 - 3:32 pm
			</p>
			<form class="mt-10 max-w-[360px]">
				<h4 class="mb-5">Receive weekly updates on Sharjah business news direct to your inbox</h4>
				<input
					type="email"
					placeholder="your e-mail"
					class="bg-gray-darker py-4 pl-8 text-sm outline-none" />
				<button @click.stop="" class="bg-primary-base px-8 py-4 text-sm text-white">
					Subscribe to
				</button>
			</form>
		</div>
		<div class="p-4 md:py-12">
			<h2 class="mb-4 text-xl text-white/70">Menu</h2>
			<nav v-for="{ link, name } in links" class="grid gap-3">
				<NuxtLink :to="link" class="flex items-center gap-1.5 text-white/50">
					{{ name }} <ChevronRightIcon class="h-2.5" />
				</NuxtLink>
			</nav>
			<div class="mt-8 max-w-prose text-sm text-gray-light">
				<nav class="mb-5 flex gap-7 underline">
					<p>Terms</p>
					<p>Privacy</p>
				</nav>
				<p class="mt-5">
					Sharjah Investment and Development Authority (Shurooq) ©2021 All rights reserved.
					Government of Sharjah
				</p>
			</div>
		</div>
	</footer>
</template>
