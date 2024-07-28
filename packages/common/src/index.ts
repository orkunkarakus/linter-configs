/**
 * Common eslint config
 *
 * @author Orkun KARAKUS
 *
 */

export default {
	env: {
		es2023: true,
		node: true,
		browser: true
	},
	extends: [
		'airbnb',
		'plugin:import/errors',
		'plugin:import/warnings',
		'prettier'
	],
	plugins: ['import', 'prettier', 'unused-imports'],
	rules: {
		'import/no-extraneous-dependencies': ['error'],
		'import/no-import-module-exports': 0,
		'import/extensions': 0,
		'comma-dangle': ['error', 'never'],
		'quote-props': 0,
		'object-curly-spacing': ['error', 'always'],
		'no-nested-ternary': 0,
		'no-console': 'warn',
		'consistent-return': 0,
		'no-use-before-define': 'off',
		'no-multiple-empty-lines': 2,
		'newline-before-return': 'error',
		'no-unused-vars': 'error',
		'max-len': [
			'warn',
			{
				code: 120,
				ignoreTrailingComments: true,
				ignoreComments: true,
				ignoreUrls: true
			}
		],
		'no-underscore-dangle': 0,
		'default-param-last': 0,
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_'
			}
		]
	}
};
