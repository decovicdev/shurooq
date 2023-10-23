<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

const { setLocale, availableLocales, locale } = useI18n();
</script>

<template>
	<header class="fixed mx-auto w-full text-white">
		<div class="container mx-auto my-10 flex w-full items-center justify-between">
			<img src="../assets/images/Logo_WHITE.png" class="h-[80px]" />
			<div class="flex items-center gap-8">
				<Menu>
					<MenuButton class="flex items-center gap-1"
						>Contact
						<ChevronDownIcon class="h-2.5" />
					</MenuButton>
					<MenuItems class="absolute grid"> </MenuItems>
				</Menu>

				<Menu class="relative" as="div">
					<MenuButton class="uppercase">{{ locale }}</MenuButton>
					<MenuItems class="absolute grid">
						<MenuItem v-for="locale in availableLocales" class="uppercase">
							<button @click="setLocale(locale)">
								{{ locale }}
							</button>
						</MenuItem>
					</MenuItems>
				</Menu>
			</div>
		</div>
	</header>
</template>
