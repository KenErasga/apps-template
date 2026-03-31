# @repo/api

NestJS 10 backend API.

## Development

```bash
# From repo root
npm run dev:api

# Or from this directory
npm run dev
```

Runs at `http://localhost:3001`.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start in watch mode |
| `npm run build` | Compile TypeScript |
| `npm run start` | Start compiled server |
| `npm run lint` | Lint source files |
| `npm run test` | Run tests |
| `npm run test:coverage` | Run tests with coverage |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | Returns `Hello World` |

## Stack

- NestJS 10
- TypeScript (strict, CommonJS)
- Jest + Supertest
