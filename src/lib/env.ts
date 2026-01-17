// src/lib/env.ts

type RequiredEnvKey =
  | "VITE_FIREBASE_API_KEY"
  | "VITE_FIREBASE_AUTH_DOMAIN"
  | "VITE_FIREBASE_PROJECT_ID"
  | "VITE_FIREBASE_STORAGE_BUCKET"
  | "VITE_FIREBASE_MESSAGING_SENDER_ID"
  | "VITE_FIREBASE_APP_ID";

function readEnv(key: RequiredEnvKey): string {
  const value = import.meta.env[key] as string | undefined;

  if (!value || value.trim() === "") {
    throw new Error(
      `[env] Missing required environment variable: ${key}. ` +
        `Check your .env (local) or production environment variables.`
    );
  }

  return value;
}

function readEnvOptional(key: string): string | undefined {
  const value = (import.meta.env as Record<string, unknown>)[key];
  if (typeof value !== "string") return undefined;
  return value.trim() || undefined;
}

export const APP_ENV =
  (import.meta.env.VITE_APP_ENV as string | undefined) ?? "development";

export const firebaseWebConfig = {
  apiKey: readEnv("VITE_FIREBASE_API_KEY"),
  authDomain: readEnv("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: readEnv("VITE_FIREBASE_PROJECT_ID"),
  storageBucket: readEnv("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: readEnv("VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: readEnv("VITE_FIREBASE_APP_ID"),
  measurementId: readEnvOptional("VITE_FIREBASE_MEASUREMENT_ID"),
} as const;
