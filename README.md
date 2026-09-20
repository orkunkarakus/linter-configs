# Linter Configs

Reusable ESLint, Prettier, and Biome configurations for JavaScript, TypeScript,
React, and React Native projects.

[![CI](https://github.com/orkunkarakus/linter-configs/actions/workflows/ci.yml/badge.svg)](https://github.com/orkunkarakus/linter-configs/actions/workflows/ci.yml)

## Packages

### ESLint

| Package                                  | Intended use                      |
| ---------------------------------------- | --------------------------------- |
| `@mr.karakus/eslint-config-common`       | Base JavaScript and Node.js rules |
| `@mr.karakus/eslint-config-common-ts`    | Base TypeScript rules             |
| `@mr.karakus/eslint-config-react`        | React and JSX rules               |
| `@mr.karakus/eslint-config-react-ts`     | React and TypeScript rules        |
| `@mr.karakus/eslint-config-react-native` | React Native rules                |

### Prettier

| Package                       | Intended use                       |
| ----------------------------- | ---------------------------------- |
| `@mr.karakus/prettier-config` | Shared Prettier formatting options |

### Biome

| Package                    | Export                               |
| -------------------------- | ------------------------------------ |
| `@mr.karakus/biome-config` | `react` and `backend` configurations |

## Installation

Install only the configuration you need:

```bash
pnpm add -D @mr.karakus/eslint-config-react-ts
pnpm add -D @mr.karakus/prettier-config
pnpm add -D @mr.karakus/biome-config
```

Replace `pnpm add -D` with the equivalent command for npm or Yarn if needed.

## Usage

### ESLint

Create an `.eslintrc.cjs` file and extend the matching configuration:

```js
module.exports = {
	root: true,
	extends: ['@mr.karakus/eslint-config-react-ts']
};
```

Available configurations can be composed from the package names above.

### Prettier

Reference the shared configuration from `package.json`:

```json
{
	"prettier": "@mr.karakus/prettier-config"
}
```

### Biome

Extend the configuration that matches your project in `biome.json`:

```json
{
	"extends": ["@mr.karakus/biome-config/react"]
}
```

Use `@mr.karakus/biome-config/backend` for backend projects.

## Development

This repository is a pnpm workspace:

```bash
pnpm install
pnpm lint
pnpm build
```

The GitHub Actions workflow runs the lint and build checks for pushes and pull
requests. Packages are published from the main branch through Changesets.

## License

MIT

## Author

[Orkun KARAKUS](https://github.com/orkunkarakus)
