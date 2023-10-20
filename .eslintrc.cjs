module.exports = {
	root: true,
	parser: "nuxt-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
	rules: {
		"import/no-extraneous-dependencies": 0,
	},
};
