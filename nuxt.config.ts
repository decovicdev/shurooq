import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "@nuxtjs/i18n", "nuxt-headlessui"],
	css: ["~/assets/css/main.css"],
	experimental: {
		payloadExtraction: false,
	},
	app: {
		head: {
			meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
			htmlAttrs: {
				lang: "en",
			},
		},
	},
	pwa: {
		registerType: "autoUpdate",
		manifest: {
			name: "Shurooq",
			short_name: "Shurooq",
			theme_color: "#ffffff",
			icons: [
				{
					src: "android-chrome-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "android-chrome-512x512.png",
					sizes: "512x512",
					type: "image/png",
				},
				{
					src: "android-chrome-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any maskable",
				},
			],
		},
		workbox: {
			navigateFallback: "/",
			globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
		},
		client: {
			installPrompt: true,
			// you don't need to include this: only for testing purposes
			// if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
			periodicSyncForUpdates: 20,
		},
		devOptions: {
			enabled: true,
			suppressWarnings: true,
			navigateFallbackAllowlist: [/^\/$/],
			type: "module",
		},
	},
	i18n: {
		vueI18n: "./i18n.config.ts",
	},
	components: [
		{
			path: "~/components",
			extensions: [".vue"],
			pathPrefix: false,
		},
	],
	pages: true,
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
