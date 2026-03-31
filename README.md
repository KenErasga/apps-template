# apps-template

A Turborepo monorepo template with a Next.js frontend and NestJS backend.

## Apps

| App | Description | Port |
|-----|-------------|------|
| `apps/web` | Next.js 16 (App Router) frontend | 3000 |
| `apps/api` | NestJS 10 REST API backend | 3001 |

## Packages

| Package | Description |
|---------|-------------|
| `packages/eslint-config` | Shared ESLint + TypeScript rules (`@repo/eslint-config`) |

## Getting Started

```bash
npm install
npm run dev
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Run all apps concurrently |
| `npm run dev:web` | Run frontend only |
| `npm run dev:api` | Run backend only |
| `npm run build` | Build all apps |
| `npm run test` | Run all tests |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Lint all apps |
| `npm run format` | Format all files with Prettier |

## Tech Stack

- **Monorepo:** Turborepo + npm workspaces
- **Language:** TypeScript (strict mode, ES2022)
- **Linting:** ESLint with shared `@repo/eslint-config`
- **Formatting:** Prettier (120 print width, single quotes)
- **Testing:** Jest
