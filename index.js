module.exports = {
	"parser": "@typescript-eslint/parser",
	"extends": [
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	"parserOptions": {
		"ecmaVersion": 2019,
		"sourceType": "module",
		"impliedStrict": true
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"@typescript-eslint/class-name-casing": "error",
		"@typescript-eslint/semi": "error",
		"no-throw-literal": "error",
		"indent": [
			1,
			"tab"
		],
		"linebreak-style": [
			1,
			"unix"
		],
		"quotes": [
			2,
			"double"
		],
		"semi": [
			1,
			"always"
		],
		"new-parens": [
			1,
			"always"
		],
		"space-before-function-paren": [
			1,
			"never"
		],
		"space-after-keywords": [
			1,
			"never"
		],
		"no-trailing-spaces": 1,
		"no-var": 2,
		"prefer-const": 1,
		"prefer-arrow-callback": 1,
		"brace-style": [
			1,
			"allman"
		]
	}
};