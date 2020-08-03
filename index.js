module.exports = {
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 2019,
		"sourceType": "module",
		"impliedStrict": true
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
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
		"keyword-spacing": [
			1,
			{ "overrides": { "if": { "after": false }, "for": { "after": false }, "while": { "after": false } } }
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