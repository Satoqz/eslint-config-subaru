module.exports = {
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 2019,
		"sourceType": "module",
		"impliedStrict": true
	},
	"rules": {
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
			{ "overrides": { "if": { "after": true }, "for": { "after": true }, "while": { "after": true } } }
		],
		"brace-style": [
			1,
			"allman"
		],
		"max-len": [
			1,
			{
				"code": 100,
				"tabWidth": 0,
				"ignoreUrls": true,
				"ignoreComments": true,
				"ignoreStrings": true,
				"ignoreTemplateLiterals": true,
				"ignoreRegExpLiterals": true
			}
		],
		"no-trailing-spaces": 1,
		"no-var": 2,
		"prefer-const": 1,
		"prefer-arrow-callback": 1,
	}
};
