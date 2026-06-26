# Marginalia — Architecture & Folder Rationale

This document explains *why* the project is structured the way it is. Read this before adding new folders or files — if something doesn't have an obvious home below, that's a signal to discuss it before creating a new pattern.

## Monorepo, not multi-repo

A single repository holding `client/`, `server/`, and `shared/` was chosen over separate repos because:
- One developer (or a small team) can review the whole system in one place.
- `shared/` types stay in sync automatically — no version-publishing step needed for internal types.
- Recruiters and reviewers can browse the entire system from one GitHub URL.

## Top-level folders

- **`client/`** — the React/Vite frontend. Nothing here knows about the database or Prisma directly; it only talks to the backend through `lib/api`.
- **`server/`** — the Express/TypeScript backend. Owns all database access and business logic.
- **`shared/`** — TypeScript types/interfaces used by *both* client and server (e.g., the shape of a `Passage` object), so the two sides of the stack can never silently drift apart.
- **`docs/`** — product and architecture documentation, kept in the repo (not a wiki) so it's versioned alongside the code it describes.

## Client structure (feature-folder, not layer-folder)

`client/src/components/` is organized by **domain** (`passage/`, `feed/`, `profile/`, `auth/`) rather than by technical type (e.g., not `buttons/`, `forms/`, `cards/` as top-level folders). This mirrors how production frontend codebases scale: when a feature changes, everything related to it lives in one place. `ui/` is the one exception — it holds small, generic, reusable primitives (Button, Input, Modal, Skeleton) that have no domain knowledge.

`pages/` mirrors the route structure directly, so the URL hierarchy and the folder hierarchy never diverge.

## Server structure (modules by domain)

`server/src/modules/` mirrors the client's domain-first approach: `auth/`, `passages/`, `tags/`, `reactions/`, `keeps/`, `users/`. Each module is expected to eventually contain its own routes, controller, service, and validation logic. This keeps each domain's code self-contained and easy to delete or refactor independently — a deliberate alternative to a "layered" structure (`/routes`, `/controllers`, `/services` as top-level folders) which tends to scatter one feature's code across many directories as the project grows.

## Why Prisma lives in `server/prisma/`

Prisma's convention is a single `schema.prisma` file plus a `migrations/` folder, both expected at a predictable root-of-package location. We follow that convention rather than fighting it, to keep Prisma tooling (CLI commands, IDE extensions) working without extra configuration.

## Why no `routes/`, `controllers/`, `services/` as top-level folders

We considered the classic layered structure but chose domain modules instead, because:
- A layered structure scales poorly past a handful of features — you end up hunting across three or four top-level folders to understand one feature end-to-end.
- A domain-module structure is what most production Node/Express codebases converge to once they outgrow a tutorial-sized project, so building it this way from day one is good practice for future jobs.

## What we deliberately left out (and why)

- **No `services/` layer abstracted away from `modules/`** yet — each module can grow its own internal `service.ts`/`controller.ts` split *inside* its folder once logic is added. Adding a separate top-level services layer now, before there's real logic to put in it, would be premature structure.
- **No microservices, no GraphQL, no Redis, no message queues** — this is a single deployable frontend and a single deployable backend talking to one PostgreSQL database. That's the right level of complexity for this project's scope and is also what most real-world small-to-mid-size production apps actually look like.
