import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { firebaseWebConfig } from "@/lib/env";

export const firebaseApp: FirebaseApp =
  getApps().length > 0 ? getApps()[0] : initializeApp(firebaseWebConfig);
