"use client";

export type StoredUser = {
  fullName: string;
  email: string;
  password: string;
};

export type CurrentUser = {
  fullName: string;
  email: string;
};

const USERS_KEY = "aiwebdev-users";
const CURRENT_USER_KEY = "aiwebdev-current-user";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getUsers(): StoredUser[] {
  if (!isBrowser()) return [];

  const raw = window.localStorage.getItem(USERS_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveUsers(users: StoredUser[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function saveCurrentUser(user: CurrentUser) {
  if (!isBrowser()) return;
  window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

// Add this to your auth.storage.ts
export function clearCurrentUser() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(CURRENT_USER_KEY);
}

// Add this to help the Header check if someone is logged in
export function getCurrentUser(): CurrentUser | null {
  if (!isBrowser()) return null;
  const raw = window.localStorage.getItem(CURRENT_USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

