/**
 * Common eslint config
 *
 * @author Orkun KARAKUS
 *
 */

export default {
	parser: '@typescript-eslint/parser',
	extends: [
		'@mr.karakus/eslint-config-react',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript'
	],
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports'
			}
		],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }]
	}
};
