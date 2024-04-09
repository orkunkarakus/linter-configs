/**
 * Common eslint config
 *
 * @author Orkun KARAKUS
 *
 */

export default {
	extends: [
		'@mr.karakus/eslint-config-common',
		'plugin:react/recommended',
		'plugin:react-redux/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime'
	],
	plugins: [
		'react',
		'jsx-a11y',
		'unused-imports',
		'react-redux',
		'react-hooks'
	],
	parserOptions: {
		ecmaVersion: 14, // es2023
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'react/no-danger-with-children': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/prop-types': 0,
		'jsx-quotes': ['error', 'prefer-double'],
		'react/destructuring-assignment': 0,
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function'
			}
		],
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_'
			}
		],
		'react/jsx-props-no-spreading': 0,
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
		'react-redux/connect-prefer-named-arguments': 2,
		'react/require-default-props': 'error',
		'react/display-name': [2, { ignoreTranspilerName: true }],
		'react/jsx-no-bind': 'error'
	}
};
