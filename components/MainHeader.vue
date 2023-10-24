<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

const { setLocale, availableLocales, locale } = useI18n();
const links = [
	{
		name: "Why sharjah",
		link: "/hello",
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
	<header
		class="sticky top-0 isolate z-[1000] flex w-full items-center justify-between bg-white px-3 py-3 text-black lg:px-16 lg:py-6">
		<img src="../assets/images/logo_black.webp" class="hidden h-[70px] lg:block" />
		<img src="../assets/images/logo-virtical.png" class="h-[80px] lg:hidden" />
		<nav class="hidden items-center gap-8 lg:flex">
			<NuxtLink v-for="{ link, name } in links" :to="link">
				<p class="flex items-center gap-1 text-gray-light">
					{{ name }} <ChevronDownIcon class="h-2.5" />
				</p>
			</NuxtLink>
		</nav>
		<div>
			<Menu class="relative" as="div">
				<MenuButton class="uppercase">{{ locale }}</MenuButton>
				<MenuItems class="absolute grid">
					<MenuItem
						@click="setLocale(locale)"
						v-for="locale in availableLocales"
						class="uppercase"
						as="button">
						{{ locale }}
					</MenuItem>
				</MenuItems>
			</Menu>
		</div>
	</header>
</template>
