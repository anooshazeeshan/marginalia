# Marginalia — Setup & Foundation Roadmap

This document tracks the *engineering foundation* phase, before any feature work begins.

## Foundation Checklist

- [x] Monorepo folder structure (`client/`, `server/`, `shared/`, `docs/`)
- [x] Docker Compose for local PostgreSQL
- [x] Root `.env.example`
- [x] `.gitignore`
- [x] Client: Vite + React + TypeScript scaffold
- [x] Client: Tailwind CSS configured
- [x] Client: ESLint + Prettier configured
- [x] Client: React Router skeleton with placeholder pages
- [x] Server: Express + TypeScript scaffold
- [x] Server: ESLint + Prettier configured
- [x] Server: Prisma initialized, schema drafted (User, Passage, Tag, Reaction, Keep)
- [x] Server: auth module scaffolded (folders + stub files, no logic)
- [x] CI workflow (lint + build on push)
- [x] Shared types package wired into both client and server builds

## Next Phase (Feature Work — Not Started)

1. Auth: signup/login logic, password hashing, JWT issuance, protected routes
2. Passage CRUD (backend) + creation form (frontend)
3. Passage detail page
4. Profile / personal shelf
5. Feed + filtering + search
6. "This Stayed With Me" reaction + "Keep" collection
7. Polish: empty/loading/error states, responsive QA, deployment
