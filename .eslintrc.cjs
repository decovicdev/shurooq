module.exports = {
	root: true,
	parser: "nuxt-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
	rules: {
		"import/no-extraneous-dependencies": 0,
		"vue/script-indent": ["error", 4, { baseIndent: 1 }],
		"prettier/prettier": [
			"error",
			{
				vueIndentScriptAndStyle: false,
			},
		],
	},

	overrides: [
		{
			files: ["*.vue"],
			rules: {
				indent: "off",
			},
		},
	],
};
