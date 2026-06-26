/**
 * FOUNDATION SCAFFOLD — placeholder API client.
 *
 * Centralizes the base URL and (eventually) auth header injection
 * so individual hooks/components never construct fetch calls by hand.
 * No real request logic implemented yet.
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api";

export const apiClient = {
  baseUrl: API_BASE_URL,
  // get, post, patch, delete methods to be implemented alongside
  // the first real feature (Passage CRUD).
};
