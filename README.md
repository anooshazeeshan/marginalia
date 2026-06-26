# Marginalia

A calm, literary web application where readers preserve meaningful passages from books and pair them with their own reflections.

Marginalia is **not** a reading app, a social feed, or a document-annotation tool. The core object is the **Passage** — a quoted excerpt, its source, and the reflection that explains why it mattered.

> This repository currently contains the **project foundation** only (tooling, structure, and configuration). Feature logic (authentication, Passage CRUD, feed, search) has not been implemented yet — see `docs/roadmap.md`.

## Tech Stack

**Frontend:** React, Vite, TypeScript, Tailwind CSS, React Router
**Backend:** Node.js, Express, TypeScript
**Database:** PostgreSQL, Prisma ORM
**Tooling:** ESLint, Prettier, Docker Compose

## Repository Structure

```
marginalia/
├── client/     React + Vite frontend
├── server/     Express + TypeScript backend
├── shared/     Types shared between client and server
├── docs/       PRD, roadmap, and architecture notes
└── docker-compose.yml   Local PostgreSQL for development
```

See `docs/architecture.md` for folder-by-folder rationale.

## Getting Started

1. Copy `.env.example` to `.env` in the project root, and to `client/.env` / `server/.env` as needed.
2. Start the local database:
   ```
   docker compose up -d
   ```
3. Install dependencies in `client/` and `server/` (each has its own `package.json`).
4. Run Prisma migrations once the schema is finalized (`server/prisma/schema.prisma`).
5. Run the client and server dev servers separately (see each package's `package.json` scripts).

## Project Status

🚧 Foundation phase — see `docs/roadmap.md` for the current build plan.

## Documentation

- [`docs/PRD.md`](./docs/PRD.md) — full product vision
- [`docs/architecture.md`](./docs/architecture.md) — folder structure and architectural decisions
- [`docs/roadmap.md`](./docs/roadmap.md) — development roadmap
