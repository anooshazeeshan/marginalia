/**
 * Shared shape of the core Passage object — used by both client and
 * server so the two can never silently drift apart. Mirrors the
 * Prisma schema (server/prisma/schema.prisma) but is intentionally
 * framework-agnostic.
 */
export type Mood =
  | "wistful"
  | "comforting"
  | "devastating"
  | "hopeful"
  | "unsettling"
  | "electric";

export interface Passage {
  id: string;
  quote: string;
  bookTitle: string;
  author: string;
  chapterOrPage?: string;
  reflection: string;
  mood: Mood;
  tags: string[];
  sharedAt: string; // ISO date string
  ownerId: string;
}
