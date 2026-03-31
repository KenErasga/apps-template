# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# From repo root
npm run dev              # Run all apps concurrently (Turbo)
npm run dev:web          # Next.js frontend only (port 3000)
npm run dev:api          # NestJS backend only (port 3001)
npm run build            # Build all apps
npm run test             # Run all tests
npm run test:coverage    # Run tests with coverage
npm run lint             # Lint all apps
npm run format           # Prettier write

# Single workspace
npm test --workspace=apps/web
npm test --workspace=apps/api
```

## Architecture

Turborepo monorepo using npm workspaces.

```
apps/web          Next.js 16 (App Router) — hello world, port 3000
apps/api          NestJS 10 — hello world GET /, port 3001
packages/eslint-config   Shared ESLint config (@repo/eslint-config)
```

Root config files: `turbo.json` (task graph), `tsconfig.base.json` (extended by both apps), `.prettierrc`.

## Key Conventions

**no-magic-numbers** — only 0, 1, -1 allowed bare; use named constants or enums.

**padding-line-between-statements** — blank line required after `const`/`let`/`var` before a non-declaration.

**NestJS** — port is the string `'3001'` (not number) to satisfy no-magic-numbers. Always `void bootstrap()`. Never raw HTTP status numbers — use `HttpStatus` enum from `@nestjs/common`.

**Next.js** — mark components using browser APIs with `'use client'`. Use counter-based IDs for list keys, not array indices.

**Async** — don't mark a method `async` unless it uses `await`; return `Promise.resolve()` instead.

## Claude Hooks

`.claude/settings.json` runs `format` + `lint` after every file edit and `test` when Claude stops. Four specialist agents live in `.claude/agents/`: `systems-architect`, `senior-backend-engineer`, `senior-frontend-engineer`, `tech-lead`.
